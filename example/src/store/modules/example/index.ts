import { ComponentMapper } from 'vuex-smart-module/lib/mapper';
import { Module, createMapper } from 'vuex-smart-module';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const module: Module<state, getters, mutations, actions> = new Module({
	actions,
	getters,
	mutations,
	namespaced: true,
	state,
});

export default module;

export const exampleMapper: ComponentMapper<state, getters, mutations, actions> = createMapper<state, getters, mutations, actions>(module);
