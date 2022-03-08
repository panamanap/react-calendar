import React from 'react';
import { DaysOfWeek } from './DaysOfWeek';
import { Weeks } from './Weeks';

export const Calendar = () => {
    return (
        <main className="calendar">
            <DaysOfWeek />
            <Weeks />
        </main>
    );
};
