import { Getters } from 'vuex-smart-module';

import State from './state';

export default class ExampleGetters extends Getters<State> {
	get testGetter(): string {
		return 'test example getter';
	}
	get test1(): number {
		return this.state.x + this.state.y;
	}
	get test2(): number {
		return this.state.x - this.state.y;
	}
}
