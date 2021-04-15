import React from 'react'
import clsx from "clsx";
import { useSelector } from 'react-redux';
import { getTextBlocks } from "store";
import { TextBlock } from "features/Editor/components";

import useStyles from "./Workspace.style";

const Workspace = ({ className }: { className?: string }) => {

    const classes = useStyles({
        postcardBackground: `https://source.unsplash.com/800x800/?nature&sig=1`
    })

    const { textBlocks } = useSelector(getTextBlocks)

    return (
        <div className={clsx(classes.workspace, className)}>

            <div className={classes.postcard}>
                <div className={classes.background}></div>

                {textBlocks.map(({ id, text, xPosition, yPosition }) =>
                    <TextBlock
                        key={id}
                        text={text}
                        xPosition={xPosition}
                        yPosition={yPosition}
                    />)}

            </div>
        </div>
    )
}

export default Workspace
