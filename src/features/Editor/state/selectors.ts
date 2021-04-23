import { RootState } from "Models";

export const getTextBlocks = (state: RootState) =>
  state.Editor.postcard.textBlocks;
export const getImages = (state: RootState) => state.Editor.slider.images;
export const getPostcard = (state: RootState) => state.Editor.postcard;
