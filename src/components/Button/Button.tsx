import React, { MouseEventHandler } from 'react'

import useStyles from "./Button.style";

interface PropTypes { name: string, onClick?: MouseEventHandler }

const Button = ({ name = "Button", onClick = () => { } }: PropTypes) => {
    const classes = useStyles()

    return (
        <button className={classes.button} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button
