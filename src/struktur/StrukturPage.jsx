import { TawangsariNavbar } from "../landing/TawangsariNavbar";
import { TawangsariFooter } from "../landing/TawangsariFooter";
import { StrukturMain } from "./StrukturMain";
import {Helmet} from "react-helmet-async";

export const StrukturPage = () => {
    return (
        <div className="w-screen overflow-x-hidden bg-white h-screen max-w-screen">
            <Helmet>
                <meta name="description"
                      content="Struktur organisasi Kelurahan Tawangsari yang terletak di Kecamatan Garum, Kabupaten Blitar, Jawa Timur, Indonesia. Kelurahan ini memiliki struktur organisasi yang terdiri dari berbagai jabatan penting untuk melayani masyarakat."/>
                <meta name="keywords" content="struktur, organisasi, kelurahan, Tawangsari, Garum, Blitar"/>
                <meta property="og:title" content="Struktur Organisasi Kelurahan Tawangsari"/>
                <meta property="og:description"
                      content="Struktur organisasi Kelurahan Tawangsari yang terletak di Kecamatan Garum, Kabupaten Blitar, Jawa Timur, Indonesia. Kelurahan ini memiliki struktur organisasi yang terdiri dari berbagai jabatan penting untuk melayani masyarakat."/>
                <meta property="og:image" content="https://tawangsari.com/assets/profil-lfcjTvI6.png"/>
                <meta property="og:url" content="https://tawangsari.com/profil"/>
            </Helmet>
            <TawangsariNavbar/>
            <StrukturMain/>
            <TawangsariFooter />
        </div>  
    )
}