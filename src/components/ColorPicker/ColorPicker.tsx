import React, { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { ColorPickerBaseProps } from "react-colorful/dist/types"
import { useOnClickOutside } from "hooks";

import useStyles from "./ColorPicker.style";

interface PropTypes {
  onClickOutside: () => void,
  isOpen: boolean,
  className?: string,
  colorPickerProps: Partial<ColorPickerBaseProps<string>>
}
const ColorPicker = ({ isOpen, colorPickerProps, onClickOutside }: PropTypes) => {
  const classes = useStyles({ isOpen });
  const colorPickerRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(colorPickerRef, onClickOutside)

  return (
    <div
      className={classes.colorPicker}
      ref={colorPickerRef}
    >
      <HexColorPicker
        {...colorPickerProps}
      />
    </div>)
}

export default ColorPicker;
