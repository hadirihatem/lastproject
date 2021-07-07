import React from 'react'
import './Button.css'

const Style =['btn--primary' , 'btn--outline']

const Size =['btn--medium', 'btn--large']

export const Button =({children, type , onClick, buttonStyle,buttonSize})=> {
    const checkButtonStyle =Style.includes(buttonStyle) ?buttonStyle : Style[0]

const checkButtonSize =Size.includes(buttonSize)?buttonSize:Size[0]
return (
    <div className='bnt-mobile'>
        <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>

    </div>
)}