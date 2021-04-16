import { createUseStyles } from 'react-jss'

interface PropTypes {
    left: number,
    top: number,
    isDragging: boolean,
}

export default createUseStyles<string, PropTypes>((theme) =>
({
    textBlock: {
        fontSize: "72px",
        fontWeight: 700,
        border: "1px solid transparent",
        "&:hover": {
            cursor: "pointer",
            border: `1px solid ${theme.colors.primary}`
        },
        position: 'absolute',
        transform: ({ left, top }) => `translate3d(${left}px, ${top}px, 0)`,
        WebkitTransform: ({ left, top }) => `translate3d(${left}px, ${top}px, 0)`,
        opacity: ({ isDragging }) => isDragging ? 0 : 1,
        height: ({ isDragging }) => isDragging ? 0 : '',
    }
}))
