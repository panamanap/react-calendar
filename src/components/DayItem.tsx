import classNames from 'classnames';
import React from 'react';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { date } from '../store/date';
import { modal } from '../store/modal';
import { user } from '../store/users';

interface DayItemProps {
    type: string;
    offDay: boolean;
    day: number;
    ordered: boolean;
    uid: string;
}

const DayItem: React.FC<DayItemProps> = ({
    day,
    type,
    offDay,
    ordered,
    uid,
}) => {
    const onChangeMonth = (
        event: React.MouseEvent<HTMLDivElement>,
        id: string,
        price: string
    ) => {
        if ((event.target as HTMLDivElement).classList[0] === 'prev') {
            date.prevMonth();
            return;
        }
        if ((event.target as HTMLDivElement).classList[0] === 'next') {
            date.nextMonth();
            return;
        }
        if ((event.target as HTMLDivElement).classList[0] === 'now') {
            modal.openReservation(true);
            user.saveParams(id, price);
        }
    };

    const userId = user.orders.findIndex((order) => order.id === uid);

    const [currentDay, currentMonth, currentYear] = useCurrentDate();
    const dayClass = (day: number, type: string, ordered: boolean) =>
        classNames({
            [type]: true,
            week__day: true,
            'week__current-day':
                day === +currentDay &&
                date.month + 1 === +currentMonth &&
                date.year === +currentYear,
            'week__another-month': type === 'prev' || type === 'next',
            week__ordered: ordered,
        });
    const timeClass = classNames({
        week__time: !ordered,
        'week__time-visible': ordered,
    });

    const price = offDay ? '30p' : '10p';

    return (
        <div
            className={dayClass(day, type, ordered)}
            onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                onChangeMonth(event, uid, price)
            }
        >
            <p className={ordered ? 'week__name' : 'week__price'}>
                {ordered ? user.orders[userId].name : price}
            </p>
            <p className={timeClass}>{ordered && user.orders[userId].time}</p>
            <p className="week__number">{day}</p>
        </div>
    );
};

export default DayItem;
