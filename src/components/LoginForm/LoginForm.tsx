import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import { logIn } from "../../redux/auth/operations";
import { LoginUser } from "../../redux/auth/types";
import { loginSchema } from "../../helpers/loginSchema";
import { useAppDispatch } from "../../hooks/hook";

import s from "./LoginForm.module.css";

const initialValues: LoginUser = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: LoginUser,
    options: FormikHelpers<LoginUser>
  ) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field type="text" name="email" className={s.input} />
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
            Log In
          </button>
        </Form>
      </Formik>
      <p>
        Do not have an account?
        <Link to="/register" className={s.link}>
          Sign up now
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
