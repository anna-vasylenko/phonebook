import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import { updateContact } from "../../redux/contacts/operations";
import { setCurrentContact } from "../../redux/contacts/slice";
import { NewContact } from "../../redux/contacts/types";
import { contactSchema } from "../../helpers/contactSchema";
import { useAppDispatch } from "../../hooks/hook";
import { ContactType } from "../Contact/Contact.types";

import s from "./ContactUpdateForm.module.css";

const initialValues: NewContact = {
  name: "",
  number: "",
};

const ContactUpdateForm: React.FC<ContactType> = ({ name, number, id }) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: NewContact,
    options: FormikHelpers<NewContact>
  ) => {
    dispatch(updateContact({ name: values.name, number: values.number, id }));
    options.resetForm();
  };

  return (
    <Formik<NewContact>
      initialValues={{ name, number }}
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
          Update Contact
        </button>
        <button
          type="button"
          className={s.button}
          onClick={() => dispatch(setCurrentContact(null))}
        >
          Cancel
        </button>
      </Form>
    </Formik>
  );
};

export default ContactUpdateForm;
