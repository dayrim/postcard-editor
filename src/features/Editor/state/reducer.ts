import { createReducer } from "typesafe-actions";
import { PostcardState, RootActions, SliderState } from "Models";
import { combineReducers } from "redux";
import { cloneDeep } from "lodash";
import cuid from "cuid";

import {
  createTextBlock,
  moveTextBlock,
  initSlider,
  initPostcard,
  updatePostcardImage,
} from "./actions";

/* Slider */

const imagesInitialState = {
  images: [],
};

const slider = createReducer<SliderState, RootActions>(
  imagesInitialState
).handleAction(initSlider.success, (state, action) => {
  return { ...state, ...action.payload };
});

/* Text blocks */
const postcardInitialState = { textBlocks: [] };

const postcard = createReducer<PostcardState, RootActions>(postcardInitialState)
  .handleAction(initPostcard.success, (state, action) => {
    return { ...state, ...action.payload };
  })
  .handleAction(createTextBlock.success, (state, action) => {
    return { ...state, textBlocks: action.payload };
  })
  .handleAction(updatePostcardImage.request, (state, { payload }) => {
    return { ...state, loading: true };
  })
  .handleAction(updatePostcardImage.failure, (state, { payload }) => {
    return { ...state, loading: false };
  })
  .handleAction(updatePostcardImage.success, (state, { payload }) => {
    return { ...state, image: payload, loading: false };
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

const reducer = combineReducers({ slider, postcard });

export default reducer;
