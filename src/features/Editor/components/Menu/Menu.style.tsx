import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
    menu: {
        padding: "60px 0",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    button: {

    },
    createTextDialog: {
        display: "flex",
        flexDirection: "column",
        "& h4": {
            textAlign: "left"
        }
    },
    dialogActions: {
        display: "flex",
        marginTop: "20px",
        "&  >*": {
            margin: 0,
            "&:not(:last-child)": {
                marginRight: "20px",
            },
        },
    }
}))