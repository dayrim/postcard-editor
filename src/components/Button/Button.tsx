import React, { MouseEventHandler } from 'react'
import clsx from "clsx";

import useStyles from "./Button.style";

interface PropTypes { name?: string, onClick?: MouseEventHandler, icon?: JSX.Element, className?: string }

const Button = ({ name = "", onClick = () => { }, icon, className }: PropTypes) => {
    const classes = useStyles()

    return (
        <button className={clsx(className, classes.button)} onClick={onClick}>
            <div className={classes.icon}>     {icon}</div>

            {name}
        </button>
    )
}

export default Button
