import { useState } from "react";
import vitalineaLogo from "./assets/img/img-logo-vitalinea.png";
import facebookLogo from "./assets/img/img-social-facebook.png";
import youtubeLogo from "./assets/img/img-social-youtube.png";
import instagramLogo from "./assets/img/img-social-instagram.png";
import "./scss/app.scss";
function NavBar() {
  const [count, setCount] = useState(0);

  return (
   
      <div>
        <nav>
          <ul className="menu">
            <li className="logo">
              <a href="#">
                <img src={vitalineaLogo} />
              </a>
            </li>
            <li className="item">
              <a href="#">Nuestro Productos</a>
            </li>
            <li className="item">
              <a href="#">Disfruta cuidarte</a>
            </li>
            <li className="item">
              <a href="#">Blog</a>
            </li>
            <li className="item">
              <a href="#">
                {" "}
                <img src={facebookLogo} />
              </a>
            </li>
            <li className="item">
              <a href="#">
                {" "}
                <img src={instagramLogo} />
              </a>
            </li>
            <li className="item">
              <a href="#">
                {" "}
                <img src={youtubeLogo} />
              </a>
            </li>

            <li className="toggle">
              <a href="#">
                <i class="fas fa-bars"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default NavBar;
