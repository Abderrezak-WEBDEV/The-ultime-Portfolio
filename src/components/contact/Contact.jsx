import React from "react";
import "../contact/Contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <form>
        <h2>Me contacter</h2>
        <label for="fname">Nom & prénom</label>
        <input type="text" id="fname" name="firstname" />

        <label for="sujet">Sujet</label>
        <input type="text" id="sujet" name="sujet" />

        <label for="emailAddress">Email</label>
        <input id="emailAddress" type="email" name="email"></input>

        <label for="subject">Message</label>
        <textarea
          id="subject"
          name="subject"
          rows="4"
          cols="50"
          maxlength="400"
        ></textarea>

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Contact;
