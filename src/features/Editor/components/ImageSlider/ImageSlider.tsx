import React from 'react'
import clsx from "clsx";
import cuid from "cuid";

import useStyles from "./ImageSlider.style";

const ImageSlider = ({ className }: { className?: string }) => {
    const classes = useStyles()

    return (
        <div className={clsx(classes.imageSlider, className)}>
            <div className={classes.images}>

                {Array(3).fill("").map(() =>
                    <div key={cuid()} className={classes.imageHolder}>
                        <img
                            className={classes.image}
                            alt={"Postcard Preset"}
                            src={`https://source.unsplash.com/300x300/?nature&sig=${cuid()}`}>
                        </img>
                    </div>)}


            </div>
        </div>
    )
}

export default ImageSlider
