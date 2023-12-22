import { useDispatch, useSelector } from "react-redux";
import UserSignUpForm from "./UserSignupForm";
import styles from "../../styles/User.module.css";
import { toggleForm, toggleFormType } from "../../features/user/userSlice";
import UserLogInForm from "./UserLogInForm";

const UserForm = () => {
  const { showForm, formType } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const closeForm = () => {
    dispatch(toggleForm(false));
  };
  const toggleCurrentFormType = (data) => {
    dispatch(toggleFormType(data));
  };

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UserSignUpForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLogInForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
