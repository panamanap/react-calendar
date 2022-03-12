import React from 'react';
import { modal } from '../store/modal';
import { user } from '../store/users';
import { checkValidation } from '../utils/checkValidation';
import { Button } from './UI/Button';
import { Input } from './UI/Input';

export const Reservation = () => {
    const [email, setEmail] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [time, setTime] = React.useState<string>('');

    const onCloseModal = () => {
        user.saveParams('', '');
        modal.openReservation(false);
    };

    const onSaveOrder = () => {
        if (!email || !name || !time) {
            alert('Empty fields!');
            return;
        }
        user.addOrder(email, name, time);
        modal.openReservation(false);
        setEmail(''); setName('');
        return;
    };

    const onChangeText = (value: string, name: string) => {
        if(name === 'email') {
            setEmail(value)            
        }
        else if(name === 'name') {
            setName(value);
        }
    };

    const onBlurInput = (value: string, name: string) => {
        if (checkValidation(name, value)) {
            name === 'email' && setEmail('');
            name === 'name' && setName('')
        } 
    }
    
    const onChangeFirst = () => {
        setTime('10.00')
    }

    const onChangeSecond = () => {
        setTime('12.00')
    }

    const onChangeThird = () => {
        setTime('14.00')
    }

    return (
        <div className="modal-wrapper" onClick={onCloseModal}>
            <div
                className="wrapper"
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <div className="modal__header">
                    <h3 className="modal__registration">Reservation</h3>
                    <p className="modal__close" onClick={onCloseModal}>
                        ✖
                    </p>
                </div>
                <div className="modal__form">
                    <Input
                        name="email"
                        type="text"
                        placeholder="Your email..."
                        onChange={onChangeText}
                        value={email}
                        onBlur={onBlurInput}
                    />
                    <Input
                        name="name"
                        type="text"
                        placeholder="Your name..."
                        onChange={onChangeText}
                        value={name}
                        onBlur={onBlurInput}
                    />
                    <div>
                        <h5 className="modal__time">
                            Select reservation time:
                        </h5>
                        <div className="modal__reservation-time">
                            <Input
                                name="time"
                                type="radio"
                                value="10.00"
                                onChange={onChangeFirst}
                                checked = {time === '10.00'}
                            />
                            <Input
                                name="time"
                                type="radio"
                                value="12.00"
                                onChange={onChangeSecond}
                                checked = {time === '12.00'}
                            />
                            <Input
                                name="time"
                                type="radio"
                                value="14.00"
                                onChange={onChangeThird}
                                checked = {time === '14.00'}
                            />
                        </div>
                    </div>
                    <Button onClick={onSaveOrder}>Reserve</Button>
                </div>
            </div>
        </div>
    );
};
