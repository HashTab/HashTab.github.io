import MenuBlockItem from "./MenuBlockItem/MenuBlockItem";
import styles from "./MenuBlock.module.scss";

const MenuBlock = (props) => {
  return (
    <div className={styles.Wrapper}>
      <h2>{props.title}</h2>
      <ul>
        {props.list.map((item) => {
          return (
            <MenuBlockItem
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
              key={item.title}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MenuBlock;
