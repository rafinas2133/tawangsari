import { createBrowserRouter } from "react-router-dom";
import { TawangsariPage } from "../landing/TawangsariPage";
import { BeritaPage } from "../berita/BeritaPage"; 
import { BeritaDetailPage } from "../berita/beritaDetail/BeritaDetailPage";
import { StrukturPage } from "../struktur/StrukturPage";
import { ProfilePage } from "../profil/ProfilePage";
import { UMKMPage } from "../umkm/UMKMPage";
import { UMKMDetailPage } from "../umkm/umkmDetail/UMKMDetailPage";
import { Admin } from "../admin/index";
import { AdminPage } from "../admin/main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TawangsariPage />,
  },
  {
    path: '/berita',
    element: <BeritaPage />,
  },
  {
    path: '/berita/:uuid',
    element: <BeritaDetailPage />,
  },
  {
    path: '/struktur',
    element: <StrukturPage />,
  },
  {
    path: '/profil',
    element: <ProfilePage />,
  },
  {
    path: '/umkm',
    element: <UMKMPage />,
  },
  {
    path: '/umkm/:uuid',
    element: <UMKMDetailPage />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/admin/main',
    element: <AdminPage />,
  },
]);
