import { TawangsariNavbar } from "../landing/TawangsariNavbar";
import { TawangsariFooter } from "../landing/TawangsariFooter";
import { ProfileMain } from "./ProfileMain";

export const ProfilePage = () => {
    return (
        <div className="w-screen overflow-x-hidden bg-white h-screen max-w-screen">
            <TawangsariNavbar />
            <ProfileMain />
            <TawangsariFooter />
        </div>  
    )
}