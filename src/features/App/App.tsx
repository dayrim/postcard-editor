import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { isAppReady, appStartAction } from "store";

import useStyles from "./App.style";

const App = () => {
    const classes = useStyles()
    const ready = useSelector(isAppReady);
    const dispatch = useDispatch();

    return (
        <div className={classes.app}>
            Welcome. Is app ready: {JSON.stringify(ready)} !
            <button onClick={() =>
                dispatch(appStartAction())}>Test</button>
        </div>
    )
}

export default App
