import {TawangsariNavbar} from "./TawangsariNavbar";
import {TawangsariBanner} from "./TawangsariBanner";
import {TawangsariProfile} from "./TawangsariProfile";
import {TawangsariBerita} from "./TawangsariBerita";
import {TawangsariPeta} from "./TawangsariPeta";
import {TawangsariFooter} from "./TawangsariFooter";
import {Helmet} from "react-helmet-async";

export const TawangsariPage = () => {
    return (
        <div className="w-screen overflow-x-hidden bg-white h-screen max-w-screen">
            <Helmet>
                <meta name="description"
                      content="Kelurahan Tawangsari adalah sebuah kelurahan yang terletak di Kecamatan Garum, Kabupaten Blitar, Jawa Timur, Indonesia. Kelurahan ini berfungsi sebagai ibu kota kecamatan dan merupakan lokasi dari kantor muspika, kantor kecamatan, kantor polsek, dan koramil."/>
                <meta name="keywords" content="profil, kelurahan, Tawangsari, Garum, Blitar"/>
                <meta property="og:title" content="Profil Kelurahan Tawangsari"/>
                <meta property="og:description"
                      content="Kelurahan Tawangsari adalah sebuah kelurahan yang terletak di Kecamatan Garum, Kabupaten Blitar, Jawa Timur, Indonesia. Kelurahan ini berfungsi sebagai ibu kota kecamatan dan merupakan lokasi dari kantor muspika, kantor kecamatan, kantor polsek, dan koramil."/>
                <meta property="og:image" content="https://tawangsari.com/assets/profil-lfcjTvI6.png"/>
                <meta property="og:url" content="https://tawangsari.com/"/>
            </Helmet>
            <TawangsariNavbar/>
            <TawangsariBanner/>
            <TawangsariProfile/>
            <TawangsariBerita/>
            <TawangsariPeta/>
            <TawangsariFooter/>
        </div>
    )
}