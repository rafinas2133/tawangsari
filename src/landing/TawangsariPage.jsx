import { TawangsariNavbar } from "./TawangsariNavbar";
import { TawangsariBanner } from "./TawangsariBanner";
import { TawangsariProfile } from "./TawangsariProfile";
import { TawangsariBerita } from "./TawangsariBerita";
import { TawangsariPeta } from "./TawangsariPeta";
import { TawangsariFooter } from "./TawangsariFooter";

export const TawangsariPage = () => {
    return (
        <div className="w-screen overflow-x-hidden bg-white h-screen max-w-screen">
            <TawangsariNavbar />
            <TawangsariBanner />
            <TawangsariProfile />
            <TawangsariBerita />
            <TawangsariPeta />
            <TawangsariFooter />
        </div>
    )
}