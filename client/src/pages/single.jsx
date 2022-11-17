import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single flex">
      <SinglePost />
      <Sidebar />
    </div>
  );
}