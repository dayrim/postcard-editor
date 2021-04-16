import { createUseStyles } from "react-jss";

interface PropTypes {
  isOpen: boolean;
}

export default createUseStyles<string, PropTypes>(() => ({
  modal: {
    background: "#fff",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    boxShadow: "0 5px 10px 2px rgba(195, 192, 192, 0.5)",
    padding: "20px",
    textAlign: "center",

    display: ({ isOpen }) => (isOpen ? "block" : "none"),
  },
  backdrop: {
    backdropFilter: "blur(2px)",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: ({ isOpen }) => (isOpen ? "block" : "none"),
  },
}));
