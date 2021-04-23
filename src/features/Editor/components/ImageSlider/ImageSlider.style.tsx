import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
    imageSlider: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: `1px solid ${theme.colors.lightGrey}`,
    },
    images: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: 'center',

    },
    imageOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        zIndex: 1,
        backgroundColor: "#FFFFFF",
        transition: theme.animation.default,
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        objectFit: "cover",
        objectPosition: "50% 50%",

    },
    imageHolder: {
        position: "relative",
        width: "12%",
        minWidth: "100px",
        "&:not(:last-child)": {
            marginRight: "35px"
        },
        "&::before": {
            content: '""',
            display: "block",
            paddingBottom: "140%"
        },
        "&:hover ": {
            cursor: "pointer",
        },
        "&:hover $imageOverlay ": {

            opacity: .2,
        }
    },



}))