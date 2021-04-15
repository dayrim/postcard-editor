declare module "Models" {
  export type ImagesState = {
    readonly currentImage: string;
    readonly images: Array<string>;
  };
  export type TextBlocksState = {
    readonly textBlocks: Array<TextBlock>;
  };
  export type TextBlock = {
    readonly id: string;
    readonly xPosition: number;
    readonly yPosition: number;
    readonly text: string;
  };
}
