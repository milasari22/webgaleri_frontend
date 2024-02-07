import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useAuth } from "../../auth/AuthContext";

const PendudukTambah = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nama_penduduk: "",
  });
  const { authToken } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Sedang menyimpan data...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/penduduk",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(response.data);
      // Optionally, you can show a success message to the user using a library like SweetAlert2.
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Berhasil menambahkan data.",
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/admin/penduduk");
      }, 1000);
    } catch (error) {
      console.error("Error creating penduduk:", error.response.data);
      console.log(formData);
      // Optionally, you can show an error message to the user using a library like SweetAlert2.
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Terjadi kesalahan dalam menambahkan data!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div>
        <h1 className="h3 mb-3 text-gray-800">Tambah penduduk</h1>
        {/* DataTales Example */}

        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex justify-content-end align-items-center">
            <Link to="/admin/penduduk" className="btn btn-danger">
              <i className="bi bi-arrow-bar-left"></i>
              <span> Kembali</span>
            </Link>
            <button
              type="button"
              className="btn btn-success ml-2"
              onClick={handleSubmit}
              disabled={loading}
            >
              <i className="bi bi-file-earmark-check"></i>
              <span> Simpan</span>
            </button>
          </div>
          <div className="card-body">
            <form>
              <p className="fw-bold">Nama penduduk</p>
              <input
                type="text"
                name="nama_penduduk"
                onChange={handleChange}
                value={formData.nama_penduduk}
                className="form-control"
                required
              ></input>
              <p className="fw-bold">Jenis kelamin</p>
              <input
                type="text"
                name="jenis_kelamin"
                onChange={handleChange}
                value={formData.jenis_kelamin}
                className="form-control"
                required
              ></input>
              <p className="fw-bold">Umur</p>
              <input
                type="text"
                name="umur"
                onChange={handleChange}
                value={formData.umur}
                className="form-control"
                required
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendudukTambah;
