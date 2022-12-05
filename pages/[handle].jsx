import { useRecoilState, useRecoilValue } from "recoil";
import { addPost } from "../atoms/moduleAtom";
import Header from "../components/Navbar/Header";
import Posts from "../components/Profile/Posts";
import HeaderProfile from "../components/Profile/HeaderProfile";

const Profile = () => {
  // const [post] = useRecoilValue(globalAddPost);

  // console.log("post", post);

  return (
    <div>
      <Header />
      <HeaderProfile />
    </div>
  );
};

export default Profile;
