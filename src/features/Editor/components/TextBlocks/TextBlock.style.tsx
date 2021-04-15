import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
    textBlock: {
        fontSize: "24px",
        fontWeight: 700,
        border: "1px solid transparent",
        "&:hover": {
            cursor: "pointer",
            border: `1px solid ${theme.colors.primary}`
        },
    }
}))