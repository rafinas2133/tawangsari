import { TawangsariNavbar } from "../../landing/TawangsariNavbar";
import { TawangsariFooter } from "../../landing/TawangsariFooter";
import { BeritaDetail } from "./BeritaDetail";
import { BeritaLatest } from "./BeritaLatest";

export const BeritaDetailPage = () => {
    return (
        <div className="w-screen overflow-x-hidden bg-gray-300 h-screen max-w-screen">
            <TawangsariNavbar />
            <BeritaDetail />
            <BeritaLatest />
            <TawangsariFooter />
        </div>
    )
}