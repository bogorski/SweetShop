import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Calendar.css';

export const Calendar = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    const eventdays = [
        { date: new Date(2024, 0, 1), info: 'Nowy Rok', type: 'holiday' },
        { date: new Date(2024, 4, 1), info: 'Święto Pracy', type: 'holiday' },
        { date: new Date(2024, 4, 2), info: 'Urlop', type: 'vacation' },
        { date: new Date(2024, 4, 3), info: 'Święto Konstytucji 3 Maja', type: 'holiday' },
        { date: new Date(2024, 4, 13), info: 'Urlop', type: 'vacation' },
        { date: new Date(2024, 4, 14), info: 'Urlop', type: 'vacation' },
        { date: new Date(2024, 4, 27), info: 'Delegacja', type: 'delegation' },
        { date: new Date(2024, 4, 30), info: 'Boże Ciało', type: 'holiday' },
        { date: new Date(2024, 4, 31), info: 'Urlop', type: 'vacation' },
        { date: new Date(2024, 11, 25), info: 'Boże Narodzenie', type: 'holiday' },
        { date: new Date(2024, 11, 26), info: 'Drugi dzień Świąt', type: 'holiday' }
    ];

    const workHours = "7.00-15.00 (8:00)";

    const today = new Date();
    const isToday = (date) => {
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const isFreeday = (date) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };

    const isEventdays = (date) => {
        return eventdays.some(
            (eventday) =>
                eventday.date.getDate() === date.getDate() &&
                eventday.date.getMonth() === date.getMonth() &&
                eventday.date.getFullYear() === date.getFullYear()
        );
    };

    const getEventdayInfo = (date, type) => {
        const event = eventdays.find(
            (event) =>
                event.date.getDate() === date.getDate() &&
                event.date.getMonth() === date.getMonth() &&
                event.date.getFullYear() === date.getFullYear() &&
                event.type === type
        );
        return event ? event.info : null;
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 0).getDay();
    };

    const handlePreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const daysOfWeek = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];

    const renderDaysOfWeek = () => {
        return daysOfWeek.map((day, index) => (
            <div key={index} className="calendar-day calendar-day-header">
                {day}
            </div>
        ));
    };

    const renderDates = () => {
        const dates = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            dates.push(<div key={`empty-${i}`} className="calendar-day calendar-empty" />);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const holidayInfo = isEventdays(date) ? getEventdayInfo(date, 'holiday') : null;
            const vacationInfo = isEventdays(date) ? getEventdayInfo(date, 'vacation') : null;
            const delegationInfo = isEventdays(date) ? getEventdayInfo(date, 'delegation') : null;

            dates.push(
                <div
                    key={day}
                    className={`calendar-day calendar-date ${isToday(date) ? 'calendar-today' : ''} ${isFreeday(date) ? 'calendar-freeday' : ''} ${holidayInfo ? 'calendar-holiday' : ''}  ${vacationInfo ? 'calendar-vacation' : ''} ${delegationInfo ? 'calendar-delegation' : ''}`}
                >
                    <div>{day}</div>
                    {isToday(date) ? <div className="calendar-info">7.00-15.00 (8:00)</div> : isFreeday(date) ? <div className="calendar-freeday">Wolne</div> : holidayInfo ? <div className="calendar-holiday">{holidayInfo}</div> : vacationInfo ? <div className="calendar-vacation">Urlop</div> : delegationInfo ? <div className="calendar-delegation">{delegationInfo}</div> : <div className="calendar-workday">{workHours}</div>}
                </div>
            );
        }
        return dates;
    };

    return (
        <Container className="calendar">
            <Row  >
                <Col className="calendar-header">
                    <button onClick={handlePreviousMonth}>&lt;</button>
                    <p className="mx-5"> {currentDate.toLocaleString('default', { month: 'long' })} {year} </p>
                    <button onClick={handleNextMonth}>&gt;</button>
                </Col>
                <Col className="calendar-days">
                    {renderDaysOfWeek()}
                    {renderDates()}
                </Col>
            </Row>
        </Container>
    );
};
