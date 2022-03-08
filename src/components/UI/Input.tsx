import React from 'react';

interface InputProps {
    placeholder: string
    setUserValue: (value: string) => void
}

export const Input: React.FC<InputProps> = ({placeholder, setUserValue}) => {
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        setUserValue(value)
    }, [value])

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <input
            onChange={onChangeInput}
            value={value}
            className="input"
            placeholder={placeholder}
        />
    );
};
