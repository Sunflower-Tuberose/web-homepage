import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://blog.vietvocal.com/wp-content/uploads/2021/11/6-7.jpg" />
      <Post img="https://images.pexels.com/photos/7521286/pexels-photo-7521286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post img="https://images.pexels.com/photos/963113/pexels-photo-963113.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/210854/pexels-photo-210854.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Post img="https://images.pexels.com/photos/1011306/pexels-photo-1011306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
  );
}
