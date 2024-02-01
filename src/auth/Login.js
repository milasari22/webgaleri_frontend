import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, authToken } = useAuth();
  const [error, setError] = useState("");

  useEffect(() => {
    if (authToken) {
      navigate("/admin");
    } else {
      setShowForm(true);
    }
  }, [authToken, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        username,
        password,
      });

      if (response.data.success) {
        login(
          response.data.data.token,
          response.data.data.name,
          response.data.data.id,
          response.data.data.foto_user
        );
        navigate("/admin");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body bg-primary p-0">
              <div className="row">
                <CSSTransition
                  in={showForm}
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                >
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-white mb-4">Selamat Datang!</h1>
                    </div>
                    <form className="user" onSubmit={handleLogin}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          placeholder="Masukkan Username..."
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          placeholder="Masukkan Password.."
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-group row">
                        <button
                          type="submit"
                          className="btn btn-info btn-user btn-block"
                          disabled={loading}
                        >
                          {loading ? "Logging in..." : "Login"}
                        </button>
                      </div>

                      {error && (
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      )}
                    </form>

                    <div className="text-end">
                      <Link to="/register" className="small text-white">
                        Register!
                      </Link>
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
