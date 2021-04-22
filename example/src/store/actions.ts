import { Actions } from 'vuex-smart-module';

import RootGetters from './getters';
import RootMutations from './mutations';
import RootState from './state';

export default class RootActions extends Actions<RootState, RootGetters, RootMutations, RootActions> {}
