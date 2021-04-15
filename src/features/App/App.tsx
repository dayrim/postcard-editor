import React from 'react'
import { Editor } from "features";

import useStyles from "./App.style";

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.app}>
            <Editor />
        </div>
    )
}

export default App
