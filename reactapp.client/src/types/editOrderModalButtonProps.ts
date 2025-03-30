import { Zamowienie } from './zamowienie';

export type EditOrderModalButtonProps = {
    handleSave: (order: Zamowienie) => void;
    selectedId: number | null;
    zamowienia: Zamowienie[];
    handleClose: () => void;
    show: boolean;
}