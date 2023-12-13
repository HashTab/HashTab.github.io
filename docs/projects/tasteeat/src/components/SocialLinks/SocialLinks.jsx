import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import styles from "./Social.Links.module.scss";

const SocialLinks = () => {
  return (
    <ul className={styles.SocialLinks}>
      <a href="">
        <InstagramIcon />
      </a>
      <a href="">
        <FacebookIcon />
      </a>
      <a href="">
        <TwitterIcon />
      </a>
      <a href="">
        <PinterestIcon />
      </a>
    </ul>
  );
};

export default SocialLinks;
