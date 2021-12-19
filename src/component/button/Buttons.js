import * as React from "react";
import './Buttons.css';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Buttons = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick} type={type}>
            {children}
        </button>
    )
}
