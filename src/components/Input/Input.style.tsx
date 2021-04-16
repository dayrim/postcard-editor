import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
    input: {
        height: "40px",
        padding: "5px",
        border: `1px solid ${theme.colors.primary}`,
        fontSize: "14px"
    }
}))