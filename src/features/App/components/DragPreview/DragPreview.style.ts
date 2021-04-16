import { createUseStyles } from "react-jss";
import { XYCoord } from "react-dnd";

interface PropTypes {
  currentOffset: XYCoord | null;
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
      display: ({ currentOffset }) => (!currentOffset ? `none` : "block"),
      transform: ({ currentOffset }) =>
        `translate(${currentOffset?.x || 0}px, ${currentOffset?.y || 0}px)`,
      WebkitTransform: ({ currentOffset }) =>
        `translate(${currentOffset?.x || 0}px, ${currentOffset?.y || 0}px)`,
    },
    textBlockPreview: {
      fontSize: "72px",
      fontWeight: 700,
      border: "1px solid transparent",
      "&:hover": {
        cursor: "pointer",
        border: `1px solid ${theme.colors.primary}`,
      },
    },
  };
});
