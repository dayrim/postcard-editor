import React, { ChangeEvent } from 'react'

import useStyles from "./Input.style";

interface PropTypes {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Input = ({ value, onChange }: PropTypes) => {
    const classes = useStyles()

    return (
        <input className={classes.input} value={value} onChange={onChange}>

        </input>
    )
}

export default Input
