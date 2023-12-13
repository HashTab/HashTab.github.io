import Title from "../Title/Title";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.Wrapper}>
      <Title title="Contact" />
      <p>5 Rue Dalou, 75015 Paris</p>
      <p>
        <a href="tel:+123456789">+123 456 789</a>
      </p>

      <a href="mailto:josefin@mail.com">josefin@mail.com</a>
    </div>
  );
};

export default Contact;
