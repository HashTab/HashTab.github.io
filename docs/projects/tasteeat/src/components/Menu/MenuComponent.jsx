import Offers from "./Offers/Offers";
import Popular from "./Popular/Popular";
import Title from "../Title/Title";
import { BtnToggleVisible } from "../Btns/Btns";
import MenuList from "./MenuList/MenuList";

import { useState } from "react";

import styles from "./MenuComponent.module.scss";

const MenuComponent = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleVisibleHandler = () => {
    isMenuVisible ? setMenuVisible(false) : setMenuVisible(true);
  };

  return (
    <div className="Container">
      <div className={styles.Wrapper}>
        <Offers />
        <Title title="Menu" />
        <Popular />
        <BtnToggleVisible
          title={isMenuVisible ? "Hide" : "See all dishes"}
          onClick={toggleVisibleHandler}
        />
        <MenuList isActive={isMenuVisible} />
      </div>
    </div>
  );
};

export default MenuComponent;
