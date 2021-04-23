import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  createTextDialog: {
    display: "flex",
    flexDirection: "column",
    "& h4": {
      textAlign: "left",
    },
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
  },
  iconButton: {
    width: "40px",
    height: "40px",
    margin: 0,
    marginRight: "5px",
  },
  colorInput: {
    display: "flex",
    position: "relative",

    "&  >input": {
      flex: "1 1 100%",
    },
  },
  colorPicker: {
    position: "absolute",
  },
}));
