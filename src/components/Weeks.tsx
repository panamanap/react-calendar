import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';
import { useGetCalendar } from '../hooks/useGetCalendar';
import { date } from '../store/date';
import { user } from '../store/users';
import DayItem from './DayItem';

export const Weeks = observer(() => {
    const [calendar, dayOff] = useGetCalendar(date.month, date.year);
    
    return (
        <div className="week">
            {Object.entries(calendar).map((arr) =>
                arr[1].map((day: number, index: number) => (
                    <DayItem
                        day={day}
                        key={index}
                        type={arr[0]}
                        offDay={Object.values(dayOff).includes(day)}
                        uid={`${day}-${date.month}-${date.year}-${moment(
                            `${day}-${date.month}-${date.year}`,
                            'DD-MM-YYYY'
                        ).weekday()}-${arr[0]}`}
                        ordered={user.orders.some((order) =>
                            order.id.includes(
                                `${day}-${date.month}-${date.year}-${moment(
                                    `${day}-${date.month}-${date.year}`,
                                    'DD-MM-YYYY'
                                ).weekday()}-${arr[0]}`
                            )
                        )}
                    />
                ))
            )}
        </div>
    );
});
