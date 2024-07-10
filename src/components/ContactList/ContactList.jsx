import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectErrorList,
  selectFilteredContactsList,
  selectLoadingList,
} from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const filteredList = useSelector(selectFilteredContactsList);
  const isLoading = useSelector(selectLoadingList);
  const error = useSelector(selectErrorList);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      <ul className={css.list}>
        {filteredList.map((contact) => {
          return (
            <li key={contact.id} className={css.listCard}>
              <Contact
                contactId={contact.id}
                contactName={contact.name}
                contactPhone={contact.number}
              ></Contact>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
