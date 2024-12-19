import { useEffect } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactUpdateForm from "../../components/ContactUpdateForm/ContactUpdateForm";

import {
  selectCurrentContact,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

import s from "./ContactsPage.module.css";

const ContactsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);
  const isError = useAppSelector(selectError);
  const currentContact = useAppSelector(selectCurrentContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <div className={s.formWrapper}>
        {currentContact ? (
          <ContactUpdateForm {...currentContact} />
        ) : (
          <ContactForm />
        )}
        <SearchBox />
      </div>
      <ContactList />
      {isLoading && <Loader />}
      {isError && (
        <p className={s.errorMessage}>Something went wrong, try again later!</p>
      )}
    </div>
  );
};

export default ContactsPage;
