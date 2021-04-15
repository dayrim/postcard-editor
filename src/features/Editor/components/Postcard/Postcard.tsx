import React from 'react'

import useStyles from "./Postcard.style";

const Postcard = () => {
    const classes = useStyles()

    return (
        <div className={classes.postcard}>
            Postcard
        </div>
    )
}

export default Postcard
