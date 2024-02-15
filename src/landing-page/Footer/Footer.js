import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>For Businiss</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Healthplan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>

          {/* <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="resource">
              <p>resource center</p>
            </a>
            <a href="resource">
              <p>Testiminials</p>
            </a>
            <a href="resource">
              <p>STV</p>
            </a>
          </div> */}

          <div className="sb_footer-links_div">
            <h4>Website</h4>
            <a href="/employer">
              <p>Gallery foto</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Data diri</h4>
            <a href="/about">
              <p>Tentang</p>
            </a>
            <a href="/career">
              <p>Status</p>
            </a>
            <a href="/contact">
              <p>Kontak</p>
            </a>
          </div>

          <div className="sb_rooter-links_div">
            <h4>Media sosial</h4>
            <div className="socialmedia">
              <p>
                <FontAwesomeIcon icon={faCamera} className="me-2" />
              </p>
              <p>
                <FontAwesomeIcon icon={faCamera} className="me-2" />
              </p>
              <p>
                <FontAwesomeIcon icon={faCamera} className="me-2" />
              </p>
              <p>
                <FontAwesomeIcon icon={faCamera} className="me-2" />
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p>Syarat & Ketentuan</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Pribadi</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Keamanan</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
