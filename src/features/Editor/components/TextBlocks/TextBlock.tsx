import { memo, useEffect } from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { DragItemTypes } from 'enums';
import { getEmptyImage } from 'react-dnd-html5-backend'

import useStyles from "./TextBlock.style";

interface PropTypes {
    text: string,
    id: string,
    left: number,
    top: number
}
const TextBlock = ({ id, text, left, top }: PropTypes) => {

    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: DragItemTypes.TextBlocks,
            item: { id, left, top, text },
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top, text],
    )
    const classes = useStyles({ isDragging, top, left })
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={classes.textBlock} ref={drag}>
            {text}
        </div>
    )
}

export default memo(TextBlock)
