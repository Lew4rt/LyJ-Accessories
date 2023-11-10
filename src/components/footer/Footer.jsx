import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_top_left">
          <h2>L&amp;J</h2>
          <p>2020 - 2023 © LYJ - Todos los derechos reservados.</p>
          <p>
            LyJ Accesorios no es una compañía ni está registrada bajo ningún
            ente regulatorio (No. 09446231).
          </p>
          <div className="footer_social_media_icons">
            <div>
              <a
                href="https://www.instagram.com/joyasybijou_lyj/"
                target="_blank"
              >
                <img
                  className="social_media_icons"
                  src="/src/assets/images/ic_instagram.png"
                  alt="ícono de instagram"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100093261330337&mibextid=ZbWKwL"
                target="_blank"
              >
                <img
                  className="social_media_icons"
                  src="/src/assets/images/ic_facebook.png"
                  alt="ícono de facebook"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_top_right">
          <div className="footer_top_right_first-text">
            <p>
              La empresa se reserva el derecho de modificar, suspender o
              cancelar el sitio web en cualquier momento y sin previo aviso.
              Asimismo, no se garantiza la disponibilidad continua o sin
              interrupciones del sitio web.
            </p>
          </div>
          <div>
            <p>
              Todas las imágenes, logotipos y marcas registradas utilizadas en
              este sitio web son propiedad exclusiva de sus respectivos
              propietarios. El contenido y los productos presentados en este
              sitio son únicamente con fines ilustrativos y promocionales.
            </p>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <hr />
        <div>
          <p>
            Cualquier disputa que pudiera surgir en relación con este sitio web
            se regirá por las leyes del país en el que la empresa tiene su
            domicilio legal.
          </p>
        </div>
      </div>
    </footer>
  );
}
