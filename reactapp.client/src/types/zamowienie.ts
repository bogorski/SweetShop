export type Zamowienie = {
    id: number | null;
    nr: string;
    od: string;
    temat: string;
    wartosc: number | null;
    status: string;
    data_zlozenia: Date | null;
    termin_realizacji: Date | null;
    w³aœciciel: string;
    email: string ;
    oferta: string;
    faktura: string;
}