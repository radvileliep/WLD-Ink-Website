import React from 'react';
import './button.css';
import {Link} from "react-router-dom";

const STYLES = ["btn--primary"];
const SIZES = ["btn--medium", "btn--large", "btn--navbar"];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick} 
            type={type}
            >
                {children}
            </button>
    )
};

export default Button