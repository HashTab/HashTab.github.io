import Subscribe from "../Subscribe/Subscribe";
import Contact from "../Contact/Contact";
import WorkingHours from "../WorkingHours/WorkingHours";
import styles from "./ContactsComponent.module.scss";

const ContactsComponent = () => {
  return (
    <div className={styles.Wrapper}>
      <Contact />
      <Subscribe />
      <WorkingHours />
    </div>
  );
};

export default ContactsComponent;
