document.addEventListener("DOMContentLoaded", function (event) {
  
  const routes = [
    { path: '/', component: List },
    { path: '/new', component: Edit }
  ];

  const router = new VueRouter({ routes });
  const app = new Vue({ router }).$mount('#app');
});