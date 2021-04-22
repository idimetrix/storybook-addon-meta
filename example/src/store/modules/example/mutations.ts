import { Mutations } from 'vuex-smart-module';

import State from './state';

export default class ExampleMutations extends Mutations<State> {
	increment(payload: number): void {
		this.state.x += payload;
		this.state.y += payload;
	}
}
