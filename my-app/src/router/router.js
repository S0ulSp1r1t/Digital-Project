import MainPage from "@/pages/MainPage";
import GalleryPage from "@/pages/GalleryPage";
import ProjectsPage from "@/pages/ProjectsPage";
import SertificatesPage from "@/pages/SertificatesPage";
import ContactsPage from "@/pages/ContactsPage";
import ParkingPage from "@/pages/projects/ParkingPage";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/gallery',
    component: GalleryPage,
  },
  {
    path: '/projects',
    component: ProjectsPage,
  },
  {
    path: '/sertificates',
    component: SertificatesPage,
  },
  {
    path: '/contacts',
    component: ContactsPage,
  },
  {
    path: '/projects/parking',
    component: ParkingPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URl)
})

export default router;