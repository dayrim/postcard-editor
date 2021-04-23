import React from 'react';
import { createPortal } from 'react-dom';
import clsx from "clsx";

import useStyles from "./Modal.style";

interface PropTypes {
    children: any,
    isOpen: boolean,
    className?: string
}
const Modal = ({ children, isOpen, className }: PropTypes) => {
    const classes = useStyles({ isOpen })
    const modalRoot = document.getElementById('modal');
    const backdropRoot = document.getElementById('backdrop');
    return <>
        {createPortal(<div className={classes.backdrop} />, backdropRoot!)}
        {createPortal(<div className={clsx(className, classes.modal)}>{children}</div>, modalRoot!)}
    </>
};

export default Modal;