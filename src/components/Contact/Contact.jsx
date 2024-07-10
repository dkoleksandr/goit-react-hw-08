import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

const Contact = ({ contactName, contactPhone, contactId }) => {
  const dispatchDelete = useDispatch();

  const handleDelete = () => {
    dispatchDelete(deleteContact(contactId));
  };

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.text}>{contactName}</div>
        <div className={css.text}>{contactPhone}</div>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
