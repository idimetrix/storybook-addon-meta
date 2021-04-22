import { Actions } from 'vuex-smart-module';

import ExampleGetters from './getters';
import ExampleMutations from './mutations';
import ExampleState from './state';

export default class ExampleActions extends Actions<ExampleState, ExampleGetters, ExampleMutations, ExampleActions> {
	async incrementAsync(payload: { amount: number; interval: number }): Promise<void> {
		setTimeout(() => this.commit('increment', payload.amount), payload.interval);
	}
}
