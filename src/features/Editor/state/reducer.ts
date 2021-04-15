import { createReducer } from "typesafe-actions";
import { RootActions, ImagesState, TextBlocksState } from "Models";
import { combineReducers } from "redux";

import { createTextBlock } from "./actions";

const imagesInitialState = {
  currentImage: "",
  images: [],
};

const images = createReducer<ImagesState, RootActions>(imagesInitialState);

const blocksInitialState = {
  textBlocks: [],
};

const textBlocks = createReducer<TextBlocksState, RootActions>(
  blocksInitialState
).handleAction(createTextBlock, (state, action) => {
  return { textBlocks: [...state.textBlocks, action.payload] };
});

const reducer = combineReducers({ images, textBlocks });

export default reducer;
