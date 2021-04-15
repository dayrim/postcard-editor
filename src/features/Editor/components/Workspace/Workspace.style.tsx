import { createUseStyles } from 'react-jss'

interface PropTypes { postcardBackground: string }

export default createUseStyles<string, PropTypes>(() => ({
    workspace: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    postcard: {
        width: "400px",
        height: "600px",
        position: "relative"
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    background: {
        background: ({ postcardBackground }) => `url(${postcardBackground})`,
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        top: 0,
        left: 0,
    }
}))