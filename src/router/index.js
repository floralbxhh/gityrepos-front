import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Callback from '../views/Callback.vue'
import Profile from '../views/Profile.vue'
import LikedRepos from '../views/LikedRepos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
    meta: {
      isLoggedOut: true,
    }
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      isLoggedIn: true,
    }
  },
  {
    path: '/likedRepos',
    name: 'LikedRepos',
    component: LikedRepos,
    meta: {
      isLoggedIn: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isLoggedIn)) {
    if (!localStorage.getItem("cryptedKey")) {
      next({ name: 'Home', params: { isNotLoggedIn: true } });    
    }
  }

  if (to.matched.some(record => record.meta.isLoggedOut)){
    if(localStorage.getItem("cryptedKey")){
      next({ name: 'Profile'});
    }
  }
  next();
})

export default router
