import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
    button: {
        background: theme.colors.primary,
        width: "180px",
        height: "45px",
        margin: "10px",
        borderWidth: "0px",
        fontSize: "16px",
        fontWeight: 700,
        color: theme.colors.primaryContrast,
        border: "1px solid transparent",
        "&:hover": {
            background: theme.colors.primaryContrast,
            color: theme.colors.primary,
            cursor: "pointer",
            border: `1px solid ${theme.colors.primary}`
        },
        "&:focus": {
            outline: `1px solid ${theme.colors.primary}`
        }
    }
}))