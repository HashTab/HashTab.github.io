import Title from "../Title/Title";
import BlogItem from "./BlogItem/BlogItem";
import { blog as posts } from "../../data/blogItems";
import styles from "./BlogComponent.module.scss";

const title = "Be First Who Read News";
const description =
  "Explore the latest stories about our dishes, offers, events and future plans here.";

const BlogComponent = () => {
  return (
    <div className="Container">
      <div className={styles.Wrapper}>
        <Title title="Blog" />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.Grid}>
          {posts.map((item, index) => {
            return (
              <BlogItem
                title={item.title}
                description={item.description}
                img={item.img}
                theme={item.theme}
                date={item.date}
                key={item.title}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
