import { TawangsariNavbar } from "../landing/TawangsariNavbar";
import { TawangsariFooter } from "../landing/TawangsariFooter";
import { BeritaBanner } from "./BeritaBanner";
import { BeritaMain } from "./BeritaMain";
import { useEffect } from "react";

export const BeritaPage = () => {
    return (

        <div className="w-screen overflow-x-hidden bg-white h-screen max-w-screen">
            <TawangsariNavbar />
            <BeritaBanner />
            <BeritaMain />
            <TawangsariFooter />
        </div>  
    )
}