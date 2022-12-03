import { useRecoilState, useRecoilValue } from "recoil";
import { addPost } from "../atoms/moduleAtom";
import Header from "../components/Navbar/Header";
import Posts from "../components/Profile/Posts";

const Profile = () => {
  // const [post] = useRecoilValue(globalAddPost);

  // console.log("post", post);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Profile;
