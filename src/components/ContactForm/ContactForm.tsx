import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { contactSchema } from "../../helpers/contactSchema";
import s from "./ContactForm.module.css";
import { useAppDispatch } from "../../hooks/hook";
import { InitialValue } from "./ContactForm.types";
import React from "react";
import { NewContact } from "../../redux/contacts/types";

const initialValues: NewContact = {
  name: "",
  phone: "",
};

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: InitialValue,
    options: FormikHelpers<InitialValue>
  ) => {
    const newContact = values;
    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="span" className={s.message} />
        </label>

        <label className={s.label}>
          Number
          <Field type="text" name="phone" className={s.input} />
          <ErrorMessage name="phone" component="span" className={s.message} />
        </label>
        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
