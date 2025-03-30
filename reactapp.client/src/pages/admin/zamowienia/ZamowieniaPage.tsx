import './ZamowieniaPage.css';

import { useEffect, useState } from 'react';
import { Col, Row, ButtonGroup, Table, Button } from 'react-bootstrap';
import { Zamowienie } from '../../../types/zamowienie';
import useUserDataFromApi from '../../../api/userApi';
import AddOrderModalButton from '../../../components/modal/AddOrderModalButton'
import EditOrderModalButton from '../../../components/modal/EditOrderModalButton'
import InfoModal from '../../../components/modal/InfoModal';
import TableHead from '../../../components/tabele/TableHead';
import TableBody from '../../../components/tabele/TableBody';
import SearchBar from '../../../components/wyszukiarka/SearchBar';
import SortDropdown from '../../../components/button/SortDropdown';

export const Zamowienia = () => {
    const [zamowienia, setZamowienia] = useState<Zamowienie[]>([]);
    const [searchResults, setSearchResults] = useState<Zamowienie[]>([]);
    const { users, isLoading, error } = useUserDataFromApi();
    const [selectedRowIndex, setSelectedRowIndex] = useState(-1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof Zamowienie | null; direction: string }>({
        key: null,
        direction: 'ascending',
    });
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [infoModalText, setInfoModalText] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        if (users.length > 0) {
            const initialOrders = users.map((user, index) => {
                const [randomDateStart, randomDateEnd] = generateRandomDateStartEnd();
                return {
                    id: index + 1,
                    nr: generateRandomNumber({ text: 'Z' }),
                    od: `Firma ${user.name.first} Sp. z o.o.`,
                    temat: selectRandomWords(2),
                    wartosc: generateRandomPrice(),
                    status: index % 5 === 1 ? 'Anulowane' : 'Zakończone',
                    data_zlozenia: randomDateStart,
                    termin_realizacji: randomDateEnd,
                    właściciel: `${user.name.first} ${user.name.last}`,
                    email: `${user.name.first}.${user.name.last}@gmail.com`.toLowerCase(),
                    oferta: generateRandomNumber({ text: 'O' }).toString(),
                    faktura: generateRandomNumber({ text: 'FV' }).toString()
                };
            });
            setZamowienia(initialOrders);
            setSearchResults(initialOrders);
        }
    }, [users]);

    useEffect(() => {
        if (searchResults.length > 0 && sortConfig.key) {
            const sortedData = applySort(searchResults, sortConfig.key, sortConfig.direction);
            setSearchResults(sortedData);
        }
    }, [sortConfig, searchResults]);

    const handleSave = (newOrder: Zamowienie) => {
        setZamowienia(prevZamowienia => {
            const updatedZamowienia = [newOrder, ...prevZamowienia];
            setSearchResults(updatedZamowienia);
            return updatedZamowienia;
        });
    };

    const handleEditSave = (editedOrder: Zamowienie) => {
        setZamowienia(prevZamowienia => {
            const updatedZamowienia = prevZamowienia.map(zamowienie =>
                zamowienie.id === editedOrder.id ? editedOrder : zamowienie
            );

            setSearchResults(updatedZamowienia);
            return updatedZamowienia;
        });
    };

    const handleOrderClick = (index: number) => {
        setSelectedRowIndex(prevIndex => prevIndex === index ? -1 : index);
    };

    const getSelectedClassName = (index: number) => {
        return index === selectedRowIndex ? 'selected-orderRow' : 'orderRow';
    };
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => {
        if (selectedRowIndex === -1) {
            setInfoModalText("Nie zaznaczono żadnego zamówienia");
            setShowInfoModal(true);
        } else {
            setShowEditModal(true);
        }
    }
    const handleDelete = () => {
        if (selectedRowIndex !== -1) {
            setZamowienia(prevZamowienia => {
                const updatedZamowienia = prevZamowienia.filter(zamowienie => zamowienie.id !== selectedRowIndex);
                setSelectedRowIndex(-1);
                const results = updatedZamowienia.filter(item =>
                    Object.values(item).some(value => {
                        if (typeof value === 'string' || typeof value === 'number') {
                            const stringValue = typeof value === 'number' ? value.toString() : value.toLowerCase();
                            return stringValue.includes(searchTerm.toLowerCase());
                        } else if (value instanceof Date) {
                            const dateString = value.toLocaleDateString().toLowerCase();
                            return dateString.includes(searchTerm.toLowerCase());
                        }
                        return false;
                    })
                );
                setSearchResults(results);
                return updatedZamowienia;
            });
        } else {
            setInfoModalText("Nie zaznaczono żadnego zamówienia");
            setShowInfoModal(true);
        }
    };

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);

        const results = zamowienia.filter(item =>
            Object.values(item).some(value => {
                if (typeof value === 'string' || typeof value === 'number') {
                    const stringValue = typeof value === 'number' ? value.toString() : value.toLowerCase();
                    return stringValue.includes(searchTerm.toLowerCase());
                } else if (value instanceof Date) {
                    const dateString = value.toLocaleDateString().toLowerCase();
                    return dateString.includes(searchTerm.toLowerCase());
                }
                return false;
            })
        );

        setSearchResults(results);
    };

    const handleSortChange = (eventKey: string) => {
        let key: keyof Zamowienie, direction: string;

        switch (eventKey) {
            case "1":
                key = 'nr';
                break;
            case "2":
                key = 'od';
                break;
            case "3":
                key = 'temat';
                break;
            case "4":
                key = 'wartosc';
                break;
            case "5":
                key = 'status';
                break;
            case "6":
                key = 'data_zlozenia';
                break;
            case "7":
                key = 'termin_realizacji';
                break;
            case "8":
                key = 'właściciel';
                break;
            case "9":
                key = 'email';
                break;
            case "10":
                key = 'oferta';
                break;
            case "11":
                key = 'faktura';
                break;
            default:
                return;
        }
        direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
        setSortConfig({ key, direction });
    };



    const applySort = (data: Zamowienie[], key: keyof Zamowienie, direction: string) => {
        const sortedData = [...data].sort((a, b) => {
            const valueA = a[key];
            const valueB = b[key];

            if (typeof valueA === 'string') {
                return direction === 'ascending' ? valueA.localeCompare(valueB as string) : valueB.localeCompare(valueA as string);
            } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                return direction === 'ascending' ? valueA - valueB : valueB - valueA;
            } else if (valueA instanceof Date && valueB instanceof Date) {
                return direction === 'ascending' ? valueA.getTime() - valueB.getTime() : valueB.getTime() - valueA.getTime();
            } else {
                return 0;
            }
        });

        return sortedData;
    };

    const headers = ['Nr', 'Od', 'Temat', 'Wartość', 'Status', 'Data złożenia', 'Termin realizacji', 'Właściciel', 'Email', 'Oferta', 'Faktura'];

    const cellRenderer = (item: Zamowienie, column: string) => {
        switch (column) {
            case 'Wartość':
                return `${item.wartosc} zł`;
            case 'Data złożenia':
                return item.data_zlozenia?.toLocaleDateString() || '';
            case 'Termin realizacji':
                return item.termin_realizacji?.toLocaleDateString() || '';
            default:
                const propName = column.toLowerCase().replace(' ', '_');
                const value = item[propName as keyof Zamowienie];
                return value !== null && value !== undefined ? String(value) : null;
        }
    };




    if (isLoading) {
        return <p>Ładowanie...</p>;
    }

    if (error) {
        return <p>Błąd: {error.message}</p>;
    }
    return (
        <Row >
            <Col xs={12} className="ms-3">
                <SearchBar handleSearch={handleSearch} />
                <ButtonGroup className="btn-primary">
                    <SortDropdown handleSortChange={handleSortChange} />
                    <AddOrderModalButton handleSave={handleSave} ordersLength={zamowienia.length} />
                    <Button onClick={handleShowEditModal}>
                        Edytuj
                    </Button>
                    <EditOrderModalButton
                        show={showEditModal}
                        handleSave={handleEditSave}
                        handleClose={handleCloseEditModal}
                        selectedId={selectedRowIndex}
                        zamowienia={zamowienia}
                    />
                    <Button onClick={handleDelete}>Usuń</Button>
                    <InfoModal
                        show={showInfoModal}
                        onHide={() => setShowInfoModal(false)}
                        text={infoModalText}
                    />
                </ButtonGroup>

            </Col>
            <Col>
                <Table striped bordered responsive className="mt-3">
                    <TableHead headers={headers} />
                    <TableBody
                        data={searchResults}
                        columns={headers}
                        getSelectedClassName={getSelectedClassName}
                        handleRowClick={handleOrderClick}
                        cellRenderer={cellRenderer}
                    />

                </Table>

            </Col>
        </Row>
    );
}

function generateRandomNumber({ text }: { text: string }): string {
    const randomNumber = Math.floor(Math.random() * 1000);
    const year = Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
    const formattedYear = year.toString();
    const randomCode = randomNumber.toString().padStart(3, '0');

    return `${text}/${randomCode}/${formattedYear}`;
}

const selectRandomWords = (numberOfWords: number) => {
    const sampleText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum';

    const words = sampleText.split(/\s+/);

    if (numberOfWords > words.length) {
        return '';
    }

    const newNumberOfWords = numberOfWords;

    if (newNumberOfWords <= 0) {
        return '';
    }

    const selectedWords = [];
    for (let i = 0; i < newNumberOfWords; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        selectedWords.push(words[randomIndex]);
    }

    return selectedWords.join(' ');
};

function generateRandomPrice(): number {
    const integerPart = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    const fractionalPart = Math.floor(Math.random() * 100);
    const priceString = `${integerPart}.${fractionalPart < 10 ? '0' + fractionalPart : fractionalPart}`;
    return parseFloat(priceString);
}
function generateRandomDateStartEnd(): [Date, Date] {
    const randomDateStart = generateRandomDate();
    const randomDateEnd = new Date(randomDateStart.getTime());
    randomDateEnd.setDate(randomDateStart.getDate() + (Math.floor(Math.random() * 20) + 1));

    return [randomDateStart, randomDateEnd];
}

function generateRandomDate(): Date {
    const startDate = new Date('2010-01-01').getTime();
    const endDate = new Date().getTime();
    const randomTime = Math.random() * (endDate - startDate) + startDate;
    const randomDate = new Date(randomTime);

    return randomDate;
}