import React from 'react';
import { days } from '../utils/constants';

export const DaysOfWeek = () => {
    return (
        <div className="daysOfWeek">
            {days.map((day) => (
                <div key={day} className="daysOfWeek__day">
                    {day}
                </div>
            ))}
        </div>
    );
};
