document.addEventListener("DOMContentLoaded", function (event) {
  const Foo = { template: '<div>param {{ $route.params.id }}</div>' };
  const Bar = { template: '<div>hey dawg 2</div>' };
  const Default = { template: '<div>default</div>' };

  const routes = [
    { path: '/', component: Default }
  ];

  const router = new VueRouter({ routes });
  const app = new Vue({ router }).$mount('#app');
});