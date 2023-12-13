import styles from "./MenuList.module.scss";
import MenuBlock from "./MenuBlock/MenuBlock";
import { menuList } from "../../../data/menu";

const MenuList = (props) => {
  return (
    <section>
      <div
        className={styles.Wrapper + " " + (props.isActive ? styles.active : "")}
      >
        {menuList.map((item) => {
          return (
            <MenuBlock title={item.title} list={item.list} key={item.title} />
          );
        })}
      </div>
    </section>
  );
};

export default MenuList;
