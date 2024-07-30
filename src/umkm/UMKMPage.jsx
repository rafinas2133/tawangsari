import { TawangsariNavbar } from "../landing/TawangsariNavbar";
import { TawangsariFooter } from "../landing/TawangsariFooter";
import { UMKMBanner } from "./UMKMBanner";
import { UMKMMain } from "./UMKMMain";

export const UMKMPage = () => {
    return (
        <div className="w-screen overflow-x-hidden bg-white min-h-screen">
        <TawangsariNavbar />
        <UMKMBanner />
        <UMKMMain />
        <TawangsariFooter />
    </div>  
    )
}