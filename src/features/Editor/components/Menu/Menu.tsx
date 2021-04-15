import React from 'react'
import { Button } from "components";
import { useDispatch } from 'react-redux';
import { createTextBlock, moveTextBlock } from "store";
import { useSelector } from 'react-redux';
import { getTextBlocks } from "store";

import useStyles from "./Menu.style";

const Sidebar = () => {
    const classes = useStyles()
    const dispatch = useDispatch();

    const { textBlocks } = useSelector(getTextBlocks)
    return (
        <div className={classes.menu}>
            <Button name={'Create Text Block'} onClick={() => dispatch(createTextBlock("Test"))}></Button>
            <Button name={'Move'} onClick={() => dispatch(moveTextBlock({ id: textBlocks[0].id, left: textBlocks[0].left + 20, top: textBlocks[0].top + 20 }))}></Button>
            <Button name={'Test'}></Button>
        </div >
    )
}

export default Sidebar
