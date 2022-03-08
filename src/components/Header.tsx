import { observer } from 'mobx-react-lite';
import React from 'react';
import { date } from '../store/date';
import { modal } from '../store/modal';
import { months } from '../utils/constants';
import { Button } from './UI/Button';
import { Switch } from './UI/Switch';

export const Header = observer(() => {
    const onPrevMonth = () => {
        date.prevMonth();
    };

    const onNextMonth = () => {
        date.nextMonth();
    };

    const onCheckTime = (value: boolean) => {
        console.log('check', value);
        modal.checkTime(value);
    };

    return (
        <header className="header">
            <div className="header__logo">
                <Button onClick={onPrevMonth}>{'<'}</Button>
                <h1 className="header__month">{months[date.month]}</h1>
                <Button onClick={onNextMonth}>{'>'}</Button>
            </div>
            <div className="header__additional">
                <h2 className="header__year">{date.year}</h2>
                <div className="check-time">
                    <p>Check the time?</p>
                    <Switch
                        condition={modal.checkingTime}
                        onClick={onCheckTime}
                    />
                </div>
            </div>
        </header>
    );
});
