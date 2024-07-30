import { TawangsariNavbar } from "../landing/TawangsariNavbar";
import { TawangsariFooter } from "../landing/TawangsariFooter";
import { StrukturMain } from "./StrukturMain";

export const StrukturPage = () => {
    return (
        <div className="w-screen overflow-x-hidden bg-gray-300 h-screen max-w-screen">
            <TawangsariNavbar />
            <StrukturMain />
            <TawangsariFooter />
        </div>  
    )
}