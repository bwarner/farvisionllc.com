"use client";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact, type ContactFormState } from "@/app/actions/contact";
import clsx from "clsx";

const initialState: ContactFormState = {
  name: "",
  email: "bfwarner@gmail.com",
  message: "Hello World!",
  success: null,
  error: null,
};

const ContactForm: React.FC = () => {
  const status = useFormStatus();
  const [state, setState] = useState<ContactFormState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Create a new object with the updated property
    setState((prevState) => ({
      ...prevState, // Copy existing properties
      [name]: value, // Update the specific property
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedState = await sendContact(state);
    setState(updatedState);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {state.error && <p className="error-label">{state.error}</p>}
        <div className="fields">
          <div
            className={clsx("field half", {
              error: state?.errors?.fieldErrors?.name?.[0],
            })}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              autoCorrect="off"
              className={clsx("field half", {
                error: state?.errors?.fieldErrors?.name,
              })}
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div
            className={clsx("field half", {
              error: state?.errors?.fieldErrors?.email?.[0],
            })}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              autoCorrect="off"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div
            className={clsx("field half", {
              error: state?.errors?.fieldErrors?.message?.[0],
            })}
          >
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={state.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <ul className="actions">
          <li>
            <button
              type="submit"
              className="button submit"
              disabled={status.pending}
            >
              {status.pending ? "Sending..." : "Send Message"}
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default ContactForm;
