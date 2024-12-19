import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/filters/selectors";
import { useAppSelector } from "../../hooks/hook";

import s from "./ContactList.module.css";

const ContactList: React.FC = () => {
  const filteredContacts = useAppSelector(selectFilteredContacts);
  return (
    <ul className={s.contactsList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={s.contactItem}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
