import React, { useState, } from 'react'
import { Button } from "components";
import { useDispatch, useSelector } from 'react-redux';
import { moveTextBlock } from "store";
import { CreateTextDialog } from "features/Editor/components";
import { getTextBlocks } from "store";

import useStyles from "./Menu.style";

const Sidebar = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const [isCreateTextOpen, openCreateText] = useState(false)

    const textBlocks = useSelector(getTextBlocks)
    return (
        <div className={classes.menu}>
            <CreateTextDialog isOpen={isCreateTextOpen} setOpen={openCreateText} />
            <Button name={'Add text'} onClick={() => openCreateText(true)}></Button>

        </div >
    )
}

export default Sidebar
