import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeViewSpa from '../views/HomeViewSpa.vue'
import ThankYouPage from '../views/ThankYouPage.vue'
import GraciasPage from '../views/GraciasPage.vue'

const routes = [
  {
    path: '/en',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'home español',
    component: HomeViewSpa,
  },
  {
    path: '/thankyou',
    name: 'thankyou',
    component: ThankYouPage,
  },
  {
    path: '/gracias',
    name: 'gracias',
    component: GraciasPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
})

export default router
