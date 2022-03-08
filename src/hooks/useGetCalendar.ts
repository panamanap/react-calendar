import { daysOfMonth } from './../utils/constants';
import moment from 'moment';

export const useGetCalendar = (month: number, year: number) => {
    const firstMonthDay = moment([year, month, 1]).day();
    const date = new Date(year, month + 1, 0);
    const lastDay = Number(date.toString().split(' ')[2]);

    const prevDate = new Date(year, month, 0);
    const prevLastDay = Number(prevDate.toString().split(' ')[2]);

    const dayOff = [];

    const thisMonth = [];
    for (let i = 0; i < lastDay; i++) {
        thisMonth.push(i + 1);
    }

    const prevMonth = daysOfMonth.slice(
        prevLastDay - Math.abs(firstMonthDay - 1),
        prevLastDay
    );

    let nextMonth: number[] = [];

    const sumDays = prevMonth.length + thisMonth.length;

    if (sumDays <= 34) {
        nextMonth = daysOfMonth.slice(0, 35 - sumDays);
    } else if (sumDays > 35) {
        nextMonth = daysOfMonth.slice(0, 42 - sumDays);
    }

    for (let day of prevMonth) {
        const date = moment(`${day}-${month}-${year}`, 'DD-MM-YYYY').day();
        if (date === 6 || date === 0) {
            dayOff.push(day);
        }
    }

    for (let day of thisMonth) {
        const date = moment(`${day}-${month + 1}-${year}`, 'DD-MM-YYYY').day();
        if (date === 6 || date === 0) {
            dayOff.push(day);
        }
    }

    for (let day of prevMonth) {
        const date = moment(`${day}-${month + 2}-${year}`, 'DD-MM-YYYY').day();
        if (date === 6 || date === 0) {
            dayOff.push(day);
        }
    }

    const calendar = {
        prev: prevMonth,
        now: thisMonth,
        next: nextMonth,
    };

    return [calendar, dayOff];
};
