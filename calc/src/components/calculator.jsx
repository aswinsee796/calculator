import React, { useState } from 'react';
import "../assets/cal.css"

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setDisplay(eval(display).toString());
            } catch (error) {
                setDisplay('Error');
            }
        } else if (value === 'C') {
            setDisplay('');
        } else {
            setDisplay(display + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((button) => (
                    <button
                        key={button}
                        onClick={() => handleButtonClick(button)}
                        className="button"
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
