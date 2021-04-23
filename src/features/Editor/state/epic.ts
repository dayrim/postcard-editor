import { catchError, mergeMap, map, filter, tap, mapTo } from "rxjs/operators";
import { throwError, from, of, combineLatest } from "rxjs";
import { RootEpic, PostcardState } from "Models";
import { isActionOf } from "typesafe-actions";
import { cloneDeep } from "lodash";
import cuid from "cuid";

import * as actions from "./actions";

export const initSlider: RootEpic = (action$, state$, { imagesAPI }) =>
  of(actions.initSlider.request()).pipe(
    mergeMap(() => from(imagesAPI.getRandomPhotos())),
    map((data) => {
      if (!data) return { images: [] };
      const images = data.map(({ urls, description, alt_description }) => ({
        id: cuid(),
        sizes: {
          full: urls.full,
          regular: urls.small,
          thumbnail: urls.thumb,
        },
        alt: description || alt_description,
      }));
      return { images };
    }),
    catchError((error) => throwError(error)),
    map((data) => actions.initSlider.success(data)),
    catchError((error: Error) => of(actions.initSlider.failure(error)))
  );

export const initPostcard: RootEpic = (action$, state$, { localStorage }) =>
  of(actions.initPostcard.request()).pipe(
    mapTo(localStorage.get<PostcardState>("postcard")),
    mergeMap((data) => {
      if (data) {
        return of(actions.initPostcard.success(data));
      } else {
        return combineLatest([
          action$.pipe(
            filter(isActionOf(actions.initSlider.success)),
            map(({ payload: { images } }) => {
              const imageCount = images.length;
              const randomIndex = Math.floor(Math.random() * imageCount);
              const randomImage = images[randomIndex];
              const postcard: PostcardState = {
                textBlocks: [],
                image: randomImage,
              };
              return actions.initPostcard.success(postcard);
            })
          ),
        ]).pipe(
          map(([data]) => data),
          tap(({ payload }) =>
            localStorage.set<PostcardState>("postcard", payload)
          )
        );
      }
    }),
    catchError((error: Error) => of(actions.initSlider.failure(error)))
  );

export const updatePostcardImage: RootEpic = (
  action$,
  state$,
  { localStorage }
) =>
  action$.pipe(
    filter(isActionOf(actions.updatePostcardImage.request)),
    map(({ payload }) => {
      const textBlocks = state$.value.Editor.postcard.textBlocks;
      localStorage.set<PostcardState>("postcard", {
        image: payload,
        textBlocks,
      });
      return actions.updatePostcardImage.success(payload);
    })
  );
export const createTextBlock: RootEpic = (action$, state$, { localStorage }) =>
  action$.pipe(
    filter(isActionOf(actions.createTextBlock.request)),
    map(({ payload: { text, color } }) => {
      const textBlocks = cloneDeep(state$.value.Editor.postcard.textBlocks);
      textBlocks.push({ id: cuid(), text, left: 0, top: 0, color });
      const image = state$.value.Editor.postcard.image;
      const postcard = {
        image,
        textBlocks,
      };
      localStorage.set<PostcardState>("postcard", postcard);
      return actions.createTextBlock.success(textBlocks);
    })
  );
