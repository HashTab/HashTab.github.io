import { blog as posts } from "../data/blogItems";
import BlogItemPage from "../components/Blog/BlogItemPage/BlogItemPage";
import { useParams } from "react-router-dom";

const BLogItemPage = () => {
  const { id } = useParams();
  const post = posts[id];

  return (
    <main>
      <section className="BLogItemPage">
        <BlogItemPage
          title={post.title}
          description={post.description}
          img={post.img}
          theme={post.theme}
          date={post.date}
          extendedDescription={post.extendedDescription}
          key={post.title}
        />
      </section>
    </main>
  );
};

export default BLogItemPage;
