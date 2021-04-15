import { createReducer } from "typesafe-actions";
import { RootActions, ImagesState, TextBlocksState } from "Models";
import { combineReducers } from "redux";
import { cloneDeep } from "lodash";

import { createTextBlock, moveTextBlock } from "./actions";

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
)
  .handleAction(createTextBlock, (state, action) => {
    return { ...state, textBlocks: [...state.textBlocks, action.payload] };
  })
  .handleAction(moveTextBlock, (state, { payload: { id, left, top } }) => {
    const textBlocks = cloneDeep(state.textBlocks);
    const blockIndex = state.textBlocks.findIndex(
      ({ id: blockId }) => blockId === id
    );
    textBlocks[blockIndex] = {
      ...textBlocks[blockIndex],
      left,
      top,
    };
    return { ...state, textBlocks };
  });

const reducer = combineReducers({ images, textBlocks });

export default reducer;
