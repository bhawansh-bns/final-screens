import React from "react";
import styles from './ButtonStyles.module.css'

const Button = ({ className, children, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;