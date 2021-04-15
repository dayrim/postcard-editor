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
        }
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        objectFit: "cover"
    }
}))