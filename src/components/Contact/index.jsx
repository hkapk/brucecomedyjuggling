import React, { useState } from "react";
import Swal from "sweetalert2";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, phone, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) setErrorMessage("Your email is invalid.");
      else setErrorMessage("");
    } else {
      if (!e.target.value.length) setErrorMessage(`${e.target.name} is required.`);
      else setErrorMessage("");
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (errorMessage) return;

    const formData = new FormData(event.target);
    formData.append("access_key", "ecf57a44-8043-4dfc-a82c-f0c95c430593");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({ title: "Thank you", text: "Your message has been sent.", icon: "success" });
      event.target.reset();
      setFormState({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="bg-black min-h-screen w-full">
      <div
        className="
    w-full md:w-screen
    max-w-none
    overflow-x-hidden
    min-h-screen
    bg-[url('/images/BallMouthstick.jpeg')]
    bg-no-repeat
    bg-cover
    md:bg-contain
    md:bg-right
    flex
    justify-center md:justify-start
    items-start
        "
      >

        <div
          className="
            bg-black/25
            md:bg-black/25
            p-18 
            mt-4
            rounded-lg md:rounded-none
            md:w-1/2 
            md:h-full
            text-white"
        >

          <form onSubmit={onSubmit} className="space-y-4">

            <div className="pt-12">
              <label className="block text-sm text-left font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleChange}
                className="w-full px-4 py-2 border bg-white/25 border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-left font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleChange}
                className="w-full px-4 py-2 border bg-white/25 border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-left font-medium mb-1">Phone</label>
              <input
                type="phone"
                name="phone"
                value={phone}
                onChange={handleChange}
                onBlur={handleChange}
                className="w-full px-4 py-2 border bg-white/25 border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-left font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                value={message}
                onChange={handleChange}
                onBlur={handleChange}
                className="w-full px-4 py-2 border bg-white/25 border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
                required
              />
            </div>

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <button
              type="submit"
              className="mx-auto block bg-white hover:bg-gray-300 text-black font-medium py-2 px-4 rounded-md 
    focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactForm;

