import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import { register } from "../../redux/auth/operations";
import { NewUser } from "../../redux/auth/types";
import { registrationSchema } from "../../helpers/registrationSchema";
import { useAppDispatch } from "../../hooks/hook";

import s from "./RegistrationForm.module.css";

const initialValues: NewUser = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: NewUser, options: FormikHelpers<NewUser>) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Username
            <Field type="text" name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.message} />
          </label>

          <label className={s.label}>
            Email
            <Field type="email" name="email" className={s.input} />
            <ErrorMessage name="email" component="span" className={s.message} />
          </label>

          <label className={s.label}>
            Password
            <Field type="password" name="password" className={s.input} />
            <ErrorMessage
              name="password"
              component="span"
              className={s.message}
            />
          </label>
          <button type="submit" className={s.button}>
            Register
          </button>
        </Form>
      </Formik>
      <p>
        Do you have an account?
        <Link to="/login" className={s.link}>
          Log In
        </Link>
      </p>
    </>
  );
};

export default RegistrationForm;
