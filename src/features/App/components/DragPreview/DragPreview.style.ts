import { createUseStyles } from "react-jss";

interface PropTypes {
  transform: string | null;
  itemColor: string | null;
}

export default createUseStyles<string, PropTypes>((theme) => {
  return {
    dragPreview: {
      position: "fixed",
      pointerEvents: "none",
      zIndex: 100,
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
    },
    item: {
      display: ({ transform }) => (!transform ? `none` : "block"),
      transform: ({ transform }) => transform,
      WebkitTransform: ({ transform }) => transform,
    },
    textBlockPreview: {
      fontSize: "72px",
      fontWeight: 700,
      border: "1px solid transparent",
      "&:hover": {
        cursor: "pointer",
        border: `1px solid ${theme.colors.primary}`,
      },
      color: ({ itemColor }) => itemColor,
    },
  };
});
