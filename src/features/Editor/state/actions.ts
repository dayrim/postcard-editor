import { createAction } from "typesafe-actions";
import { TextBlock } from "Models";
import cuid from "cuid";

export const createTextBlock = createAction(
  "@app createTextBlock",
  (text: string = "") => ({ id: cuid(), text, xPosition: 0, yPosition: 0 })
)<TextBlock>();
