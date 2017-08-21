import Vue from 'vue';
import Router from 'vue-router';
import dashboardPreview from '@/views/components/dashboard-preview';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboardPreview',
      component: dashboardPreview
    }
  ]
});
