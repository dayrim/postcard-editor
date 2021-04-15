import React from 'react'

import useStyles from "./TextBlock.style";

interface PropTypes {
    text: string,
    xPosition: number,
    yPosition: number
}
const TextBlock = ({ text, xPosition, yPosition }: PropTypes) => {
    const classes = useStyles()

    return (
        <div className={classes.textBlock}>
            {text}
        </div>
    )
}

export default TextBlock
