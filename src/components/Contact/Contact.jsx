import css from "./Contact.module.css";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.info}>
        <p className={css.text}>
          {" "}
          <IoIosPerson className="icon" size="24" /> {name}
        </p>
        <p className={css.text}>
          {" "}
          <MdOutlineLocalPhone className="icon" size="24" /> {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
