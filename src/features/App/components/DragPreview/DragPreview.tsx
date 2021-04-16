import React from 'react'
import { useDragLayer } from 'react-dnd'
import { DragItemTypes } from 'enums';

import useStyles from "./DragPreview.style";

const DragPreview = () => {

    const {
        itemType,
        isDragging,
        item,
        currentOffset,
    } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }))
    const classes = useStyles({ currentOffset })

    const renderItem = () => {
        switch (itemType) {
            case DragItemTypes.TextBlocks:
                return (<div className={classes.textBlockPreview}>
                    {item.text}
                </div>)
            default:
                return null
        }
    }
    if (!isDragging) {
        return null
    }
    return (
        <div className={classes.dragPreview}>
            <div
                className={classes.item}
            >
                {renderItem()}
            </div>
        </div>
    )
}

export default DragPreview
