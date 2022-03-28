import { Fragment } from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
//import EmailIcon from "@material-ui/icons/Email";
import WorkIcon from "@material-ui/icons/Work";
//import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
//import Help from "@material-ui/icons/Help"
import logo from "../../images/benveba.png";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <Fragment>
      <div className={style.footer}>
        <div className={style.contacto}>
          <div className={style.left_contact}>
            <div
              onClick={() =>
                window.open("https://wa.me/5491154844670", "_blank")
              }
              className={style.container_left}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <WhatsAppIcon style={{ margin: "7px" }} />
              Click And Contact
            </div>
          </div>

          <div className={style.right_contact}>
            <Instagram
              style={{ display: "block", margin: "7px" }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/benve_ba/?hl=es",
                  "_blank"
                )
              }
            />
          </div>
        </div>

        <div className={style.linea} />

        <div className={style.derechos}> Embrace The Unknown</div>

        <div className={style.linea} />

        <div className={style.logo_footer}>
          <img className={style.img} src={logo} alt="logo" />
        </div>
      </div>
    </Fragment>
  );
}
