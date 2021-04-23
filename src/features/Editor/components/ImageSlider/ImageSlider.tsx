import React from 'react'
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { getImages, updatePostcardImage } from "store";

import useStyles from "./ImageSlider.style";

const ImageSlider = ({ className }: { className?: string }) => {
    const classes = useStyles()
    const images = useSelector(getImages)
    const dispatch = useDispatch()

    return (
        <div className={clsx(classes.imageSlider, className)}>
            <div className={classes.images}>

                {images.map(({ id, sizes, alt, ...rest }) =>
                    <div
                        key={id}
                        className={classes.imageHolder}
                        onClick={() => dispatch(updatePostcardImage.request({ id, sizes, alt, ...rest }))}>
                        <div className={classes.imageOverlay}></div>
                        <img
                            className={classes.image}
                            alt={alt}
                            src={sizes.thumbnail}>
                        </img>
                    </div>)}


            </div>
        </div>
    )
}

export default ImageSlider
