import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
    button: {
        background: theme.colors.primary,
        width: "180px",
        height: "45px",
        margin: "10px",
        transition: theme.animation.default,
        borderWidth: "0px",
        fontSize: "16px",
        fontWeight: 700,
        color: theme.colors.primaryContrast,
        border: "1px solid transparent",
        "&:hover": {
            background: theme.colors.primaryComplimentary,
            color: theme.colors.primaryContrast,
            cursor: "pointer",
        },
        "&:focus": {
            outline: `1px solid ${theme.colors.primary}`
        }
    },
    icon: {}
}))