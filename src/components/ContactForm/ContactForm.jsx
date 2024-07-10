import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Min 3").max(50, "max 50").required("Required"),
  number: Yup.string().min(3, "Min 3").max(50, "max 50").required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>

          <ErrorMessage
            className={css.validationMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={css.wrapper}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={phoneFieldId}
          ></Field>

          <ErrorMessage
            className={css.validationMessage}
            name="number"
            component="span"
          />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
