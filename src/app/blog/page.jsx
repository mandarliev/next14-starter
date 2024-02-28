import { getPosts } from "@/lib/data";
import PostCard from "../components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = async () => {
  // Fetch data with an API
  // const posts = await getData();

  // Fetch data without an API
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
