import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import styles from "./WelcomeInfo.module.scss";

const WelcomeInfo = () => {
  const elements = [
    {
      id: "1",
      icon: <LocationOnOutlinedIcon />,
      title: "Locate Us",
      descr: "Riverside 25, San Diego, California",
    },
    {
      id: "2",
      icon: <AvTimerOutlinedIcon />,
      title: "Open Hours",
      descr: "Mon To Fri 9:00 AM - 9:00 PM",
    },
    {
      id: "3",
      icon: <FactCheckOutlinedIcon />,
      title: "Reservation",
      descr: "restaurantate@gmail.com",
    },
  ];

  const createInfoElement = (element) => {
    return (
      <div className={styles.Item} key={element.id}>
        <div className={styles.Icon}>{element.icon}</div>
        <div>
          <h2>{element.title}</h2>
          <p>{element.descr}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.WelcomeInfo}>
      <div className="Container">
        <div className={styles.Wrapper}>
          {elements.map((element) => {
            return createInfoElement(element);
          })}
        </div>
      </div>
    </div>
  );
};

export default WelcomeInfo;
