import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Pages
import contacts from './pages/ContactsPage.vue';
import NewProject from './pages/NewProject.vue';
import CheckList from './pages/CheckList.vue';



const routes = [
    { path: '/', component: NewProject },
    { path: '/contacts', component: contacts },
    { path: '/checklist', component: CheckList },
    

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');