import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

const GA: string = 'UA-179517743-1';

Vue.use(VueAnalytics, {
	autoTracking: {
		exception: true,
		exceptionLogs: true,
		page: true,
		pageviewOnLoad: true,
		screenview: true,
	},
	id: GA,
});
