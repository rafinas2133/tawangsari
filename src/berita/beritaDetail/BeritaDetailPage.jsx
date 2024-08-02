import {useEffect} from "react";
import {TawangsariNavbar} from "../../landing/TawangsariNavbar";
import {TawangsariFooter} from "../../landing/TawangsariFooter";
import {BeritaDetail} from "./BeritaDetail";

export const BeritaDetailPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-screen overflow-x-hidden bg-white h-screen max-w-screen">
            <TawangsariNavbar/>
            <BeritaDetail/>
            <TawangsariFooter/>
        </div>
    );
};
