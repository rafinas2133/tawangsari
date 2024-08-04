import { TawangsariNavbar } from "../landing/TawangsariNavbar";
import { TawangsariFooter } from "../landing/TawangsariFooter";
import { UMKMBanner } from "./UMKMBanner";
import { UMKMMain } from "./UMKMMain";

export const UMKMPage = () => {
    return (
        <div className="w-screen overflow-x-hidden bg-white h-screen max-w-screen">
        <TawangsariNavbar />
        <UMKMBanner />
        <UMKMMain />
        <TawangsariFooter />
    </div>  
    )
}