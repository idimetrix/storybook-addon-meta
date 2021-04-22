import Vue from 'vue';

import { CreateElement, VNode } from 'vue/types';

import App from './App.vue';

import '@/setup';

import store from './store';

Vue.config.productionTip = false;

new Vue({
	render: (h: CreateElement): VNode => h(App),
	store,
}).$mount('#app');
