import React, { useState, useRef } from 'react'
import { Button, Modal, Input, ColorPicker } from "components";
import { useDispatch } from 'react-redux';
import { createTextBlock, } from "store";
import { Icon, InlineIcon } from '@iconify/react';
import colorPicker from '@iconify-icons/si-glyph/color-picker';


import useStyles from "./CreateTextDialog.style"

interface PropTypes {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}
const CreateTextDialog = ({ isOpen = false, setOpen }: PropTypes) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const [color, setColor] = useState("#000000");
    const [pickerOpened, setPickerOpened] = useState(false)

    return (
        <Modal isOpen={isOpen}  >
            <div className={classes.createTextDialog}>
                <h2>Create text block</h2>
                <h4>Text</h4>
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)} />

                <h4>Color</h4>
                <div className={classes.colorInput}>
                    <ColorPicker
                        isOpen={pickerOpened}
                        onClickOutside={() => setPickerOpened(false)}
                        colorPickerProps={{ color, onChange: setColor }}
                    ></ColorPicker>

                    <Button
                        onClick={() => setPickerOpened(!pickerOpened)}
                        className={classes.iconButton}
                        icon={<Icon width={22} icon={colorPicker} />}></Button>
                    <Input
                        value={color}
                        onChange={(e) => setColor(e.target.value)} />
                </div>



                <div className={classes.dialogActions}>
                    <Button
                        name={'Decline'}
                        onClick={() => setOpen(false)}></Button>
                    <Button
                        name={'Confirm'}
                        onClick={() => {
                            dispatch(createTextBlock.request({ text, color }))
                            setOpen(false)
                        }}></Button>

                </div>

            </div>

        </Modal>
    )
}

export default CreateTextDialog
