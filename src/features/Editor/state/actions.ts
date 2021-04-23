import { createAction, createAsyncAction } from "typesafe-actions";
import { TextBlock, ImageAPI, SliderState, PostcardState, Image } from "Models";
import cuid from "cuid";

// export const createTextBlock = createAction(
//   "@editor createTextBlock",
//   (text: string = "") => ({ id: cuid(), text, left: 0, top: 0 })
// )<TextBlock>();

export const moveTextBlock = createAction(
  "@editor moveTextBlock",
  ({ id, left, top }: { id: string; left: number; top: number }) => ({
    id,
    left,
    top,
  })
)<{ id: string; left: number; top: number }>();

export const createTextBlock = createAsyncAction(
  "@editor createTextBlock Request",
  "@editor createTextBlock Success",
  "@editor createTextBlock Failure"
)<{ text: string; color: string }, TextBlock[], Error>();

export const updatePostcardImage = createAsyncAction(
  "@editor updatePostcardImage Request",
  "@editor updatePostcardImage Success",
  "@editor updatePostcardImage Failure"
)<Image, Image, Error>();

export const initSlider = createAsyncAction(
  "@editor initSlider Request",
  "@editor initSlider Success",
  "@editor initSlider Failure"
)<void, SliderState, Error>();

export const initPostcard = createAsyncAction(
  "@editor initPostcard Request",
  "@editor initPostcard Success",
  "@editor initPostcard Failure"
)<void, PostcardState, Error>();
