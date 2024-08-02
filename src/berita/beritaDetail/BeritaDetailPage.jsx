import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { TawangsariNavbar } from "../../landing/TawangsariNavbar";
import { TawangsariFooter } from "../../landing/TawangsariFooter";
import { BeritaDetail } from "./BeritaDetail";
import { BeritaLatest } from "./BeritaLatest";

export const BeritaDetailPage = () => {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the location changes
    }, [location]);

    return (
        <div className="w-screen overflow-x-hidden bg-white h-screen max-w-screen">
            <TawangsariNavbar />
            <BeritaDetail />
            <BeritaLatest />
            <TawangsariFooter />
        </div>
    )
}