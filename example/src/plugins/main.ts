import VModal from 'vue-js-modal';
import VScrollLock from 'v-scroll-lock';
import Vue from 'vue';
import Vue2ClickOutside from 'vue2-click-outside';
import Vue2TouchEvents from 'vue2-touch-events';
import VueCountdown from '@chenfengyuan/vue-countdown';
import VueTyperPlugin from 'vue-typer';

Vue.use(Vue2TouchEvents);
Vue.use(VueTyperPlugin);
Vue.use(VScrollLock);
Vue.use(Vue2ClickOutside);

Vue.use(VModal, {
	dynamicDefaults: {
		draggable: true,
		height: 'auto',
		resizable: true,
	},
});

Vue.component(VueCountdown.name, VueCountdown);
