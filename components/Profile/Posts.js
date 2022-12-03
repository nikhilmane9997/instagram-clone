import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { globalAddPost, postState } from "../../atoms/moduleAtom";
import Model from "../Model";

const Posts = () => {
  const [globalPost] = useRecoilState(postState);
  console.log("globalPost", globalPost);
  return <>{globalPost && <Model />}</>;
};

export default Posts;
