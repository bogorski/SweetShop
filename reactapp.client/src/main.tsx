import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from './pages/error-page/ErrorPage';

import { Layout } from './layout/user/Layout';
import { Cukiernie } from './pages/user/cukiernie/CukierniePage';
import { Catering } from './pages/user/catering/CateringPage';
import { Kariera } from './pages/user/kariera/KarieraPage';
import { ONas } from './pages/user/o-nas/ONasPage';
import { Kontakt } from './pages/user/kontakt/KontaktPage';
import { Bezy } from './pages/user/sklep/BezyPage';
import { Ciasta } from './pages/user/sklep/CiastaPage';
import { Ciastka } from './pages/user/sklep/CiastkaPage';
import { Tarty } from './pages/user/sklep/TartyPage';
import { Torty } from './pages/user/sklep/TortyPage';
import { Wszystko } from './pages/user/sklep/WszystkoPage';
import { Home } from './pages/user/home/HomePage';


import { PracownikLayout } from './layout/pracownik/Layout';
import { PracownikHome } from './pages/pracownik/home/HomePage';
import { Limity } from './pages/pracownik/urlopy/limity/LimityPage';
import { Nieobecnosci } from './pages/pracownik/urlopy/nieobecnosci/NieobecnosciPage';
import { Grafik } from './pages/pracownik/urlopy/grafik/GrafikPage';
import { Aktualnosci } from './pages/pracownik/aktualnosci/AktualnosciPage';
import { Kalendarz } from './pages/pracownik/kalendarz/KalendarzPage';
import { Delegacje } from './pages/pracownik/delegacje/DelegacjePage';
import { Szkolenia } from './pages/pracownik/szkolenia/SzkoleniaPage';
import { PracownikDokumenty } from './pages/pracownik/dokumenty/PracownikDokumentyPage';


import { AdminLayout } from './layout/admin/Layout';
import { AdminHome } from './pages/admin/home/HomePage';
import { Lista } from './pages/admin/pracownicy/lista/ListaPage';
import { Umowy } from './pages/admin/pracownicy/umowy/UmowyPage';
import { AdminDokumenty } from './pages/admin/pracownicy/dokumenty/AdminDokumentyPage';
import { Zamowienia } from './pages/admin/zamowienia/ZamowieniaPage';
import { Finanse } from './pages/admin/finanse/FinansePage';
import { Rekrutacja } from './pages/admin/rekrutacja/RekrutacjaPage';
import { Flota } from './pages/admin/flota/FlotaPage';
import { Ankiety } from './pages/admin/ankiety/AnkietyPage';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <BrowserRouter >
            <Routes >
                <Route element={<Layout />} >
                    <Route path='/' element={<Home />} />
                    <Route path='/cukiernie' element={<Cukiernie />} />
                    <Route path='/catering' element={<Catering />} />
                    <Route path='/kariera' element={<Kariera />} />
                    <Route path='/kontakt' element={<Kontakt />} />
                    <Route path='/o-nas' element={<ONas />} />
                    <Route path='/sklep/bezy' element={<Bezy />} />
                    <Route path='/sklep/ciasta' element={<Ciasta />} />
                    <Route path='/sklep/ciastka' element={<Ciastka />} />
                    <Route path='/sklep/tarty' element={<Tarty />} />
                    <Route path='/sklep/torty' element={<Torty />} />
                    <Route path='/sklep/wszystko' element={<Wszystko />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
                <Route element={<AdminLayout />} >
                    <Route path='/admin' element={<AdminHome />} />
                    <Route path='/admin/pracownicy/lista' element={<Lista/>} />
                    <Route path='/admin/pracownicy/umowy' element={<Umowy />} />
                    <Route path='/admin/pracownicy/dokumenty' element={<AdminDokumenty />} />
                    <Route path='/admin/zamowienia' element={<Zamowienia />} />
                    <Route path='/admin/finanse' element={<Finanse />} />
                    <Route path='/admin/rekrutacja' element={<Rekrutacja />} />
                    <Route path='/admin/flota' element={<Flota />} />
                    <Route path='/admin/ankiety' element={<Ankiety />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
                <Route element={<PracownikLayout />} >
                    <Route path='/pracownik' element={<PracownikHome />} />
                    <Route path='/pracownik/urlopy/limity' element={<Limity />} />
                    <Route path='/pracownik/urlopy/nieobecnosci' element={<Nieobecnosci />} />
                    <Route path='/pracownik/urlopy/grafik' element={<Grafik />} />
                    <Route path='/pracownik/aktualnosci' element={<Aktualnosci />} />
                    <Route path='/pracownik/kalendarz' element={<Kalendarz />} />
                    <Route path='/pracownik/delegacje' element={<Delegacje />} />
                    <Route path='/pracownik/szkolenia' element={<Szkolenia />} />
                    <Route path='/pracownik/dokumenty' element={<PracownikDokumenty />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
)

