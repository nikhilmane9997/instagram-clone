import { atom, selector } from "recoil";

export const moduleState = atom({
  key: "moduleState",
  default: false,
});

export const disclosureState = atom({
  key: "disclosureState",
  default: false,
});

export const addPost = atom({
  key: "addPostState",
  default: false,
});

export const postState = atom({
  key: "postState",
  default: false,
});

export const globalAddPost = selector({
  key: "globalAddPost",
  get: ({ get }) => {
    const module = get(postState);

    return { module };
  },
});
