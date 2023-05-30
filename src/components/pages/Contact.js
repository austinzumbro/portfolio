import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
      if (inputValue === "") {
        setErrorMessage("Email is a required field.");
      } else if (!validateEmail(inputValue)) {
        setErrorMessage("Email is invalid.");
      } else {
        setErrorMessage(""); // Clear the error message if the input is valid
      }
    } else if (inputType === "name") {
      setName(inputValue);
      if (inputValue === "") {
        setErrorMessage("Name is a required field.");
      } else {
        setErrorMessage(""); // Clear the error message if the input is valid
      }
    } else {
      setMessage(inputValue);
      if (inputValue === "") {
        setErrorMessage("Message is a required field.");
      } else {
        setErrorMessage(""); // Clear the error message if the input is valid
      }
    }
  };

  return (
    <div className="flex flex-col justify-center align-center h-100">
      <h2 className="text-2xl font-serif font-bold text-zinc-800">
        Contact Me
      </h2>
      <p className="font-serif text-zinc-700">I'd love to hear from you.</p>
      <form className="flex flex-col">
        <div className="my-5">
          <label for="name-input">Name</label>
          <input
            id="name-input"
            name="name"
            onChange={handleInputChange}
            type="text"
            className="input w-full"
            value={name}
          />
        </div>
        <div className="my-5">
          <label for="email-input">Email</label>
          <input
            id="email-input"
            name="email"
            onChange={handleInputChange}
            type="text"
            className="input w-full"
            value={email}
          />
        </div>
        <div className="mb-5">
          <label for="message-input">Message</label>
          <textarea
            id="message-input"
            name="message"
            onChange={handleInputChange}
            type="text"
            className="textarea textarea-lg w-full"
          >
            {message}
          </textarea>
        </div>
        <input className="btn font-normal self-end" type="submit" />
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
