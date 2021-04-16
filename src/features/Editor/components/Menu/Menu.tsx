import React, { useState, ChangeEvent } from 'react'
import { Button, Modal, Input } from "components";
import { useDispatch } from 'react-redux';
import { createTextBlock, moveTextBlock } from "store";
import { useSelector } from 'react-redux';
import { getTextBlocks } from "store";

import useStyles from "./Menu.style";

const Sidebar = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const [isCreateTextOpen, openCreateText] = useState(false)
    const [text, setText] = useState("")
    const { textBlocks } = useSelector(getTextBlocks)
    return (
        <div className={classes.menu}>
            <Modal isOpen={isCreateTextOpen}  >
                <div className={classes.createTextDialog}>
                    <h2>Create text block</h2>
                    <h4>Text</h4>
                    <Input value={text} onChange={(e) => setText(e.target.value)} />
                    <div className={classes.dialogActions}>
                        <Button name={'Decline'} onClick={() => openCreateText(false)}></Button>
                        <Button name={'Confirm'} onClick={() => {
                            dispatch(createTextBlock(text))
                            openCreateText(false)
                        }}></Button>

                    </div>

                </div>

            </Modal>
            <Button name={'Create Text Block'} onClick={() => openCreateText(true)}></Button>
            <Button name={'Move'} onClick={() => dispatch(moveTextBlock({ id: textBlocks[0].id, left: textBlocks[0].left + 20, top: textBlocks[0].top + 20 }))}></Button>
            <Button name={'Test'} onClick={() => openCreateText(!isCreateTextOpen)}></Button>
        </div >
    )
}

export default Sidebar
