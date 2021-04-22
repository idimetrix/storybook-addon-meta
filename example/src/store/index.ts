import { ComponentMapper } from 'vuex-smart-module/lib/mapper';
import { Module, createMapper, createStore } from 'vuex-smart-module';
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

import { example } from './modules';

Vue.use(Vuex);

const module: Module<state, getters, mutations, actions> = new Module({
	actions,
	getters,
	modules: {
		example,
	},
	mutations,
	state,
});

export default createStore(module, { strict: true });

export const rootMapper: ComponentMapper<state, getters, mutations, actions> = createMapper<state, getters, mutations, actions>(module);
