import { createAction } from "typesafe-actions";
import { TextBlock } from "Models";
import cuid from "cuid";

export const createTextBlock = createAction(
  "@app createTextBlock",
  (text: string = "") => ({ id: cuid(), text, left: 0, top: 0 })
)<TextBlock>();

export const moveTextBlock = createAction(
  "@app moveTextBlock",
  ({ id, left, top }: { id: string; left: number; top: number }) => ({
    id,
    left,
    top,
  })
)<{ id: string; left: number; top: number }>();
