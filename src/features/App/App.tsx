import React from 'react'
import { Editor } from "features";
import { DragPreview } from "features/App/components";

import useStyles from "./App.style";

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.app}>
            <DragPreview />
            <Editor />
        </div>
    )
}

export default App
