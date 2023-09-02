import { useState } from "react";

export default function Contact() {
  const [user, SetUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, SetErrors] = useState({
    nameErr: null,
    emailErr: null,
    phoneErr: null,
  });

  function validateHandler(e) {
    if (e.target.name === "name") {
      let length = e.target.value.length;
      SetErrors({
        ...errors,
        nameErr:
          length === 0
            ? "name must be more than 3 characters"
            : length > 10
            ? "name must be less than 10 characters"
            : null,
      });
    } else if (e.target.name === "email") {
      let emailVal = e.target.value;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      SetErrors({
        ...errors,
        emailErr:
          emailVal.length === 0
            ? "email is required"
            : !emailRegex.test(emailVal)
            ? "please enter a valid email!"
            : null,
      });
    } else if (e.target.name === "phone") {
      let mobileVal = e.target.value;
      const mobileRegex = /^(01\d{9}|(\+20\d{10}))$/;

      SetErrors({
        ...errors,
        phoneErr:
          mobileVal.length === 0
            ? "mobile number is required"
            : !mobileRegex.test(mobileVal)
            ? "enter a valid number"
            : null,
      });
    }
  }

  return (
    <div
      id="contact"
      className="container bg-body-tertiary py-3 mt-5 w-75 mx-auto text-center rounded-4"
    >
      <h2 className="fw-bold text-dark mt-5 text-capitalize">get in touch</h2>
      <p className="text-muted text-capitalize ">Let's work together!</p>

      <form className="w-75 mx-auto my-5">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            className={`form-control p-3 ${
              errors.nameErr ? "border-danger shadow-none" : ""
            }`}
            name="name"
            value={user.name}
            onChange={(e) => {
              SetUser({ ...user, name: e.target.value });
              validateHandler(e);
            }}
          />
          <div
            id="NameHelpBlock"
            className="form-text text-danger text-start text-capitalize"
          >
            {errors.nameErr}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className={`form-control p-3 ${
              errors.emailErr ? "border-danger shadow-none" : ""
            }`}
            value={user.email}
            onChange={(e) => {
              SetUser({ ...user, email: e.target.value });
              validateHandler(e);
            }}
          />
          <div
            id="EmailHelpBlock"
            className="form-text text-danger text-start text-capitalize"
          >
            {errors.emailErr}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            className={`form-control p-3 ${
              errors.phoneErr ? "border-danger shadow-none" : ""
            }`}
            value={user.phone}
            onChange={(e) => {
              SetUser({ ...user, phone: e.target.value });
              validateHandler(e);
            }}
          />
          <div
            id="PhoneHelpBlock"
            className="form-text text-danger text-start text-capitalize"
          >
            {errors.phoneErr}
          </div>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            aria-label="With textarea"
            rows="7"
          ></textarea>
        </div>

        <div className="mb-3">
          <button
            type="button"
            class="btn btn-outline-primary w-100"
            disabled={
              errors.nameErr || errors.emailErr || errors.phoneErr
                ? true
                : false
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
