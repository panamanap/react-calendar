import React from 'react';


interface InputProps {
    type: string;
    onChange: (value: string, name: string) => void; 
    onBlur?: ((value: string, name: string) => void);
    value: string;
    checked? : boolean
    placeholder?: string;
    name: string
}

export const Input: React.FC<InputProps> = ({
    placeholder,
    type,
    value,
    onChange,
    checked,
    name,
    onBlur
}) => {
    const onCheckValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
        onBlur && onBlur(event.target.value, name)
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value, name)
    }

    if (type === 'radio') {
        return (
            <div className="radio">
                <label>
                    {value}
                    <input
                        name={name}
                        checked={checked}
                        type={type}
                        onChange={onChangeInput}
                        className="input"
                        placeholder={placeholder}
                    />
                </label>
            </div>
        );
    }

    return (
        <input
            onBlur={onCheckValidation}
            type={type}
            onChange={onChangeInput}
            value={value}
            className="input"
            placeholder={placeholder}
        />
    );
};
