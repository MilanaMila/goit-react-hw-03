import css from "./ContactForm.module.css";
import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const id = useId();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 letters")
      .max(50, "Maximum 50 letters")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be XXX-XX-XX")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    onAdd({ id: id, ...values });
    actions.resetForm();
  };

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
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" className={css.input} id={nameFieldId} />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          className={css.input}
          id={numberFieldId}
        />
        <ErrorMessage name="number" component="span" />

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
