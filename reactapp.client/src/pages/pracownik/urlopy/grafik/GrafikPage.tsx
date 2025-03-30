import { useEffect, useState } from 'react';
import { Table, Col, Row, Badge } from 'react-bootstrap';
import './GrafikPage.css';
import { Trigger } from './Trigger';

export const Grafik = () => {
    const [dataUser, setDataUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=20')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setDataUser(data);
                console.log(data.results[0])
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const holidaysDays = [
        { date: new Date(2024, 4, 1), type: 'holiday' },
        { date: new Date(2024, 4, 3), type: 'holiday' },
        { date: new Date(2024, 4, 30), type: 'holiday' },
    ];
    const absenceDays = [
        { dateFrom: new Date(2024, 4, 2), dateTo: new Date(2024, 4, 2), user: 1, type: 'absence ', note: 'UW' },
        { dateFrom: new Date(2024, 4, 2), dateTo: new Date(2024, 4, 2), user: 0, type: 'absence ', note: 'UW' },
        { dateFrom: new Date(2024, 4, 27), dateTo: new Date(2024, 4, 31), user: 1, type: 'absence ', note: 'UW' },
        { dateFrom: new Date(2024, 4, 13), dateTo: new Date(2024, 4, 24), user: 6, type: 'absence ', note: 'UW' },
        { dateFrom: new Date(2024, 4, 1), dateTo: new Date(2024, 4, 10), user: 3, type: 'absence ', note: 'UW' },
        { dateFrom: new Date(2024, 4, 13), dateTo: new Date(2024, 4, 17), user: 9, type: 'absence ', note: 'IN' },
        { dateFrom: new Date(2024, 4, 1), dateTo: new Date(2024, 4, 8), user: 5, type: 'absence ', note: 'UW' },
        { dateFrom: new Date(2024, 4, 13), dateTo: new Date(2024, 4, 17), user: 2, type: 'absence ', note: 'SZ' },
        { dateFrom: new Date(2024, 4, 13), dateTo: new Date(2024, 4, 13), user: 8, type: 'absence ', note: 'UŻ' },
        { dateFrom: new Date(2024, 4, 22), dateTo: new Date(2024, 4, 22), user: 0, type: 'absence ', note: 'UI' },
        { dateFrom: new Date(2024, 4, 13), dateTo: new Date(2024, 4, 17), user: 9, type: 'absence ', note: 'IN' },
        { dateFrom: new Date(2024, 4, 1), dateTo: new Date(2024, 4, 8), user: 15, type: 'absence ', note: 'UW' },
        { dateFrom: new Date(2024, 4, 13), dateTo: new Date(2024, 4, 17), user: 12, type: 'absence ', note: 'SZ' },
        { dateFrom: new Date(2024, 4, 13), dateTo: new Date(2024, 4, 13), user: 18, type: 'absence ', note: 'UŻ' },
        { dateFrom: new Date(2024, 4, 22), dateTo: new Date(2024, 4, 22), user: 10, type: 'absence ', note: 'UI' },
        { dateFrom: new Date(2024, 4, 27), dateTo: new Date(2024, 4, 31), user: 18, type: 'absence ', note: 'UW' },
        { dateFrom: new Date(2024, 4, 13), dateTo: new Date(2024, 4, 24), user: 19, type: 'absence ', note: 'UW' },
    ];

    const isWeekend = (day) => {
        const dayOfWeek = new Date(year, month, day).getDay();
        return dayOfWeek === 0 || dayOfWeek === 6; // 0 - niedziela, 6 - sobota
    };

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    const handlePrevMonth = () => {
        setDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setDate(new Date(year, month + 1, 1));
    };

    const monthName = new Intl.DateTimeFormat('pl-PL', { month: 'long' }).format(date);


    if (loading) {
        return <p>Ładowanie...</p>;
    }

    if (error) {
        return <p>Błąd: {error.message}</p>;
    }
    return (
        <div>
            <Col className="calendar-header">
                <button onClick={handlePrevMonth}>&lt;</button>
                <p className="mx-5 mt-3">{monthName} {year}</p>
                <button onClick={handleNextMonth}>&gt;</button>
            </Col>
            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        {daysArray.map(day => (
                            <th key={day}>{day < 10 ? `0${day}` : day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataUser && dataUser.results.map((user, userIndex) => (
                        <tr key={userIndex}>
                            <td>{user.name.first} {user.name.last}</td>
                            {daysArray.map((day) => {
                                let note = '';
                                
                                const isAbsenceDay = absenceDays.some(absence => {
                                    const fromDate = new Date(absence.dateFrom);
                                    const toDate = new Date(absence.dateTo);
                                    note = absence.note;
                                    return userIndex === absence.user &&
                                        day >= fromDate.getDate() &&
                                        day <= toDate.getDate() &&
                                        month === fromDate.getMonth() &&
                                        year === fromDate.getFullYear()
                                });
                                const isHolidayDay = holidaysDays.some(holyday => {
                                    const holydayDate = new Date(holyday.date);
                                    
                                    return day === holydayDate.getDate() && month === holydayDate.getMonth() && year === holydayDate.getFullYear();
                                });
                                return (
                                    <td
                                        key={day}
                                        className={note==='SZ' ? "szkolenie": isAbsenceDay ? 'urlop' : (isWeekend(day) || isHolidayDay ? 'wolne' : '')}
                                    >
                                        {isAbsenceDay ? note : ''}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row className="pt-4">
                <Col xs={{ span: 6, offset: 3 }} className="text-center">
                    <Trigger />
                    <Badge className="wolne mx-2">Dzień wolny</Badge>
                    <Badge className="zdalna mx-2">Praca zdalna</Badge>
                    <Badge className="delegacja mx-2">Delegacja</Badge>
                    <Badge className="szkolenie mx-2">Szkolenie</Badge>
                </Col>
            </Row>
        </div>
    )
}