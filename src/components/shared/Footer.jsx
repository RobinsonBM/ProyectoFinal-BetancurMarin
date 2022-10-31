import { Link } from "react-router-dom";
import "../../styles/components/shared/Footer.scss";
const logo = require("../../assets/img/logo.jpg");
const rappi = require("../../assets/icon/rappi-logo-7.png");
const ifood = require("../../assets/icon/IFood_logo.svg.png");

const Footer = () => {
  const menu = [
    {
      category: "Platos Tipicos",
      path: "/platos-tipicos",
    },
    {
      category: "Carnes Asadas",
      path: "/carnes-asadas",
    },
    {
      category: "Pescados",
      path: "/pescados",
    },
    {
      category: "Hamburguesas",
      path: "/hamburguesas",
    },
    {
      category: "Desayunos",
      path: "/desayunos",
    },
  ];
  return (
    <>
      <footer>
        <div id="footer" className="row">
          <div className="footer-logo col-md-3 col-12">
            <img src={logo} alt="Restaurante la 44" />
          </div>
          <div className="footer-nav col-md-3 col-12">
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              {/* <li>
                <a href="./pages/carta.html">Carta Menu</a>
              </li>
              <li>
                <a href="./pages/historia.html">Nuestra Historia</a>
              </li>
              <li>
                <a href="./pages/experiencia.html">Experiencias</a>
              </li>
              <li>
                <a href="./pages/contacto.html">Contactanos</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-carta col-md-3 col-6">
            <h4>Carta Menú</h4>
            <ul>
              {/* <li>Entradas</li> */}
              {menu.map((item) => {
                return (
                  <li>
                    <Link to={item.path}>{item.category}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-contacto col-md-3 col-6">
            <div className="info">
              <h4>Contacto</h4>
              <ul>
                <li>
                  <a href="mailto:restaurantela44@gmail.com">
                    <em className="fa-solid fa-envelope"></em>
                    restaurantela44@gmail.com
                  </a>
                </li>
                <li>
                  Comunícate con nuestra sede llamando al: <br />
                  <em className="fa-solid fa-phone"></em> Tel: (604) 617 1131
                </li>
                <li>
                  Sabaneta: <br />
                  <a
                    href="https://g.page/RLa44?share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em className="fa-solid fa-location-dot"></em> Carrera 44-
                    70 sur 19, Parque de Sabaneta
                  </a>
                </li>
              </ul>
            </div>
            <div className="redes">
              <a
                href="https://www.facebook.com/RLa44"
                target="_blank"
                rel="noreferrer"
              >
                <em className="fa-brands fa-facebook-square"></em>
              </a>
              <a
                href="https://www.instagram.com/restaurantela44/"
                target="_blank"
                rel="noreferrer"
              >
                <em className="fa-brands fa-instagram-square"></em>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=++573173806320&text=Buenas,%20quisiera%20hacer%20un%20pedido!"
                target="_blank"
                rel="noreferrer"
              >
                <em className="fa-brands fa-whatsapp-square"></em>
              </a>
              <a
                href="https://www.rappi.com.co/restaurantes/900108993-Restaurante-La-"
                target="_blank"
                rel="noreferrer"
              >
                <img src={rappi} alt="Rappi Restaurante la 44" />
              </a>
              <a
                href="https://www.ifood.com.co/delivery/sabaneta-ant/restaurante-la-44-san-juaquin/c9054e50-445f-4311-acc7-6a17e33b64f6"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ifood} alt="Ifood Restaurante la 44" />
              </a>
            </div>
          </div>
        </div>
        <p>
          Todos los derechos reservador &copy; Robinson Betancur Marin |
          Desarrollador de Software
        </p>
      </footer>
    </>
  );
};
export default Footer;
