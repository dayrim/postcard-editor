import React from 'react'
import clsx from "clsx";
import { useSelector, useDispatch } from 'react-redux';
import { getTextBlocks, moveTextBlock } from "store";
import { TextBlock } from "features/Editor/components";
import { useDrop } from 'react-dnd'
import { TextBlock as TextBlockType } from "Models";
import { DragItemTypes } from 'enums';

import useStyles from "./Workspace.style";

const Workspace = ({ className }: { className?: string }) => {
    const dispatch = useDispatch()
    const classes = useStyles({
        postcardBackground: `https://source.unsplash.com/800x800/?nature&sig=1`
    })

    const { textBlocks } = useSelector(getTextBlocks)
    const [, drop] = useDrop(
        () => ({
            accept: DragItemTypes.TextBlocks,
            drop(textBlock: TextBlockType, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as {
                    x: number
                    y: number
                }

                let left = Math.round(textBlock.left + delta.x)
                let top = Math.round(textBlock.top + delta.y)

                dispatch(moveTextBlock({ id: textBlock.id, left, top }))

            },
        }),
    )
    return (
        <div className={clsx(classes.workspace, className)}>
            <div className={classes.postcard} ref={drop}>
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
