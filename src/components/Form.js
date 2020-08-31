import React from "react";
import { Formik, Field, Form } from "formik";

export default function SignUpForm(props) {
  return (
    <div className="form">
      <h2>{props.title}</h2>

      <Formik
        className="form"
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className="form__formgroup">
            <label htmlFor="fullname">Full Name</label>
            <Field
              id="fullname"
              name="fullname"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div className="form__formgroup">
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              name="username"
              required
              placeholder="Choose A Username"
            />
          </div>

          <div className="form__formgroup">
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Your Email"
              type="email"
              required
            />
          </div>

          <div className="form__formgroup">
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" required />
          </div>

          <div className="form__formgroup">
            <label htmlFor="confirm_password">Confirm Password</label>
            <Field id="confirm_password" name="confirm_password" required />
          </div>

          <div className="form__formgroup">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
