import React from 'react'

import { Workspace, ImageSlider, Menu } from "./components";
import useStyles from "./Editor.style";


const Editor = () => {
    const classes = useStyles()


    return (
        <div className={classes.editor}>
            <div className={classes.mainWindow}>
                <Workspace className={classes.workspaceWindow}></Workspace>
                <ImageSlider className={classes.sliderWindow}></ImageSlider>
            </div>
            <div className={classes.separator}></div>
            <div className={classes.sidebar}>
                <Menu></Menu>
            </div>

        </div>
    )
}

export default Editor
