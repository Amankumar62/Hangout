import { useContext } from "react";
import { Post } from "../component/Post";
import "./Home.css";
import { PostContext } from "../context/PostContext";
export const Home = () => {
  const { userPosts } = useContext(PostContext);
  return (
    <>
      <div className="home-container">
        <ul>
          {userPosts?.map((post) => (
            <li key={post._id}>
              <Post postDetails={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
