import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import { addContact } from "../../redux/contacts/operations";
import { NewContact } from "../../redux/contacts/types";
import { contactSchema } from "../../helpers/contactSchema";
import { useAppDispatch } from "../../hooks/hook";

import s from "./ContactForm.module.css";

const initialValues: NewContact = {
  name: "",
  number: "",
};

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: NewContact,
    options: FormikHelpers<NewContact>
  ) => {
    const newContact = values;
    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <Formik<NewContact>
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
          <Field type="text" name="number" className={s.input} />
          <ErrorMessage name="number" component="span" className={s.message} />
        </label>
        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
