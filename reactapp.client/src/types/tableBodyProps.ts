import { Zamowienie } from './zamowienie';

export type TableBodyProps = {
    data: Zamowienie[];
    columns: string[];
    getSelectedClassName: (id: number) => string;
    handleRowClick: (id: number) => void;
    cellRenderer: (item: Zamowienie, column: string) => React.ReactNode;
};