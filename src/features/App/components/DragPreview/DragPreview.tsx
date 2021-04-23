import { useCallback } from 'react'
import { DragLayerMonitor } from 'react-dnd'
import { useDragLayer } from "hooks";
import { DragItemTypes } from "enums";

import useStyles from "./DragPreview.style";


const DragPreview = () => {

    const getPreviewTransform = useCallback(
        (monitor: DragLayerMonitor): {
            transform: string | null,
            itemText: string | null,
            itemColor: string | null
        } => {
            const item = monitor.getItem();
            const initialOffset = monitor.getInitialSourceClientOffset();
            const currentOffset = monitor.getSourceClientOffset();
            const isDragging = monitor.isDragging();
            const itemType = monitor.getItemType()

            if (
                itemType !== DragItemTypes.TextBlocks ||
                !isDragging ||
                !initialOffset ||
                !currentOffset
            ) {
                return { transform: null, itemText: null, itemColor: null };
            }
            const { x, y } = currentOffset;

            return {
                transform: `translate(${Math.round(x)}px, ${Math.round(y)}px)`,
                itemText: item.text,
                itemColor: item.color
            };
        },
        [],
    );


    const { transform, itemText, itemColor } = useDragLayer(getPreviewTransform);


    const classes = useStyles({ transform, itemColor })

    if (!transform) {
        return null;
    }

    return (
        <div className={classes.dragPreview}>
            <div
                className={classes.item}
            >
                {<div className={classes.textBlockPreview}>
                    {itemText}
                </div>}
            </div>
        </div>
    );
};
export default DragPreview