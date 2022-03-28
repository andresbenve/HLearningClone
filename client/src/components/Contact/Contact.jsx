import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { getUserInfo } from "../../redux/actions/userActions";
import s from "./contact.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";

const Result = () => {
  return (
    <p>
      Tu mensaje ha sido enviado satisfactoriamente. Te contactaremos pronto!
    </p>
  );
};
export default function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const [result, showresult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_or9mjrn",
        e.target,
        "user_GdBu7T9DTHFnIo5cvAyNk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };
  return (
    <div>
      <NavBar />
      <div className={s.body}>
        <div className={s.contactme} id="contact">
          <div className={s.contactOverlay}>
            <div className={s.container}>
              <div className={s.form}>
                <form action="" onSubmit={sendEmail} className={s.contForm}>
                  <div className={s.formWord}>
                    <h2>Contacto</h2>
                    <span>Nombre Completo</span>
                    <br />
                    <input type="text" name="fullName" required />
                    <br />
                    <span>Numero de telefono</span>
                    <br />
                    <input type="number" name="phone" required />
                    <br />
                    <span>Ingresa tu Email</span>
                    <br />
                    <input type="email" name="email" required />
                    <br />
                    <span>Ingrese su duda o inconveniente</span>
                    <br />
                    <textarea
                      className={s.textarea}
                      type="text"
                      name="message"
                      required
                    />
                    <br />
                  </div>
                  <div className={s.formWords}>
                    <p>Soporte de Benve</p>

                    <button>SUBMIT</button>
                    <div className={s.row}>{result ? <Result /> : null}</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
