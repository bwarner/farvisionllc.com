"use client";
import React, { useState } from "react";
import { sendContact, type ContactFormState } from "@/app/actions/contact";
import clsx from "clsx";
import posthog from "posthog-js";

const initialState: ContactFormState = {
  name: "",
  email: "",
  message: "",
  success: null,
  error: null,
};

const ContactForm: React.FC = () => {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [pending, setPending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    posthog.capture("contact_form_submitted");
    try {
      const updatedState = await sendContact(state);
      setState(updatedState);
      if (updatedState.success) {
        posthog.capture("contact_form_success");
      } else {
        posthog.capture("contact_form_error", {
          error: updatedState.error,
          field_errors: updatedState.errors?.fieldErrors,
        });
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {state.success && (
          <p className="success-label">Message sent successfully!</p>
        )}
        {state.error && !state.errors && (
          <p className="error-label">{state.error}</p>
        )}
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
              value={state.name}
              onChange={handleChange}
            />
            {state?.errors?.fieldErrors?.name?.[0] && (
              <span className="field-error">
                {state.errors.fieldErrors.name[0]}
              </span>
            )}
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
            {state?.errors?.fieldErrors?.email?.[0] && (
              <span className="field-error">
                {state.errors.fieldErrors.email[0]}
              </span>
            )}
          </div>
          <div
            className={clsx("field", {
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
            {state?.errors?.fieldErrors?.message?.[0] && (
              <span className="field-error">
                {state.errors.fieldErrors.message[0]}
              </span>
            )}
          </div>
        </div>
        <ul className="actions">
          <li>
            <button
              type="submit"
              className="button submit"
              disabled={pending}
            >
              {pending ? "Sending..." : "Send Message"}
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default ContactForm;
