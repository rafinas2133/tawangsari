import { TawangsariNavbar } from "../../landing/TawangsariNavbar";
import { TawangsariFooter } from "../../landing/TawangsariFooter";
import { UMKMDetail } from "./UMKMDetail";

export const UMKMDetailPage = () => {
    return (
        <div className="w-screen overflow-x-hidden bg-white h-screen max-w-screen">
            <TawangsariNavbar />
            <UMKMDetail />
            <TawangsariFooter />
        </div>  
    )
}