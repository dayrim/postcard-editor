import { createUseStyles } from "react-jss";

interface PropTypes {
  isOpen: boolean;
}

export default createUseStyles<string, PropTypes>((theme) => ({
  colorPicker: {
    display: ({ isOpen }) => (isOpen ? "block" : "none"),
    position: "absolute",
    top: "100%",

    "& .react-colorful": {
      boxShadow: "0px 0px 15px -2px #000000",
      borderRadius: "8px 8px 0 0",
    },
  },
}));
