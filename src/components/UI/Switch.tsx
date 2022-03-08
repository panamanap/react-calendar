import classNames from 'classnames';
import React from 'react';

interface SwitchProps {
    condition: boolean;
    onClick: (value: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({onClick}) => {
    const [value, setValue] = React.useState(true)
   
    const switchClass = classNames({
        switcher: true,
        round: value ? true : false,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }
    console.log('value', value);
    return (
        <label className="switch" onClick={() => onClick(value)}>
            <input type="checkbox"
            checked={value}
            onChange={handleInputChange}/>
            <span className={switchClass}></span>
        </label>
    );
};
