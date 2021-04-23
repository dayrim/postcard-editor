declare module "Models" {
  export type SliderState = {
    readonly images: Array<Image>;
  };
  export type PostcardState = {
    readonly image?: Image;
    readonly textBlocks: Array<TextBlock>;
  };
  export type Image = {
    readonly sizes: ImageSizes;
    readonly id: string;
    readonly alt: string;
  };
  export type ImageSizes = {
    readonly full: string;
    readonly regular: string;
    readonly thumbnail: string;
  };

  export type TextBlock = {
    readonly id: string;
    readonly left: number;
    readonly top: number;
    readonly text: string;
    readonly color: string;
  };
}
