import React from 'react'
import { Button } from "components";
import { useDispatch } from 'react-redux';
import { createTextBlock } from "store";

import useStyles from "./Menu.style";

const Sidebar = () => {
    const classes = useStyles()
    const dispatch = useDispatch();

    return (
        <div className={classes.menu}>
            <Button name={'Create Text Block'} onClick={() => dispatch(createTextBlock("Test"))}></Button>
            <Button name={'Test'}></Button>
            <Button name={'Test'}></Button>
        </div >
    )
}

export default Sidebar
