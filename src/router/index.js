import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'

const routes = [
    { path: '/', component: Home, title: '홈', icon: 'fas fa-fw fa-home text-2xl' },
    { path: '/', component: Home, title: '탐색하기', icon: 'fas fa-fw fa-hashtag text-2xl' },
    { path: '/notifications', component: Notifications, title: '알림', icon: 'fas fa-fw fa-bell text-2xl' },
    { path: '/messages', component: Messages, title: '쪽지', icon: 'fas fa-fw fa-envelope text-2xl' },
    { path: '/', component: Home, title: '북마크', icon: 'fas fa-fw fa-bookmark text-2xl' },
    { path: '/', component: Home, title: '리스트', icon: 'fas fa-fw fa-list-alt text-2xl' },
    { path: '/profile', component: Profile, title: '프로필', icon: 'fas fa-fw fa-user text-2xl' },
    { path: '/', component: Home, title: '더 보기', icon: 'fas fa-fw fa-ellipsis-h text-2xl' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router