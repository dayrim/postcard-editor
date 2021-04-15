import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
    editor: {
        display: "flex",
        height: "100%",
        width: "100%",
        padding: "60px 0px",
        maxWidth: "1200px",
        justifyContent: "center",
        alignItems: "center"
    },
    sidebar: {
        flex: "1 0 30%",
        display: "flex",
        alignItems: "center",
        height: "100%",
        maxWidth: "300px"
    },
    mainWindow: {
        flex: "1 1 70%",
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
    },
    workspaceWindow: {
        flex: "1 1 auto",

        padding: "20px 0px"
    },
    sliderWindow: {
        flex: "1 1 auto",
        padding: "20px 0px"
    },
    separator: {
        width: "1px",
        height: "100%",
        background: theme.colors.lightGrey
    }
}))