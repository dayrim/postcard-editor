import React from 'react'
import clsx from "clsx";
import { useSelector } from 'react-redux';
import { getTextBlocks } from "store";
import { TextBlock } from "features/Editor/components";
import { useDrop } from 'react-dnd'

import useStyles from "./Workspace.style";

const Workspace = ({ className }: { className?: string }) => {

    const classes = useStyles({
        postcardBackground: `https://source.unsplash.com/800x800/?nature&sig=1`
    })

    const { textBlocks } = useSelector(getTextBlocks)
    // const [, drop] = useDrop(
    //     () => ({
    //         accept: ItemTypes.BOX,
    //         drop(item: DragItem, monitor) {
    //             const delta = monitor.getDifferenceFromInitialOffset() as {
    //                 x: number
    //                 y: number
    //             }

    //             let left = Math.round(item.left + delta.x)
    //             let top = Math.round(item.top + delta.y)

    //             moveBox(item.id, left, top)
    //             return undefined
    //         },
    //     }),
    //     [moveBox],
    // )
    return (
        <div className={clsx(classes.workspace, className)}>

            <div className={classes.postcard}>
                <div className={classes.background}></div>

                {textBlocks.map(({ id, text, left, top }) =>
                    <TextBlock
                        key={id}
                        id={id}
                        text={text}
                        left={left}
                        top={top}
                    />)}

            </div>
        </div>
    )
}

export default Workspace
