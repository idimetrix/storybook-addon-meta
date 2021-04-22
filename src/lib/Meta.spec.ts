import test, { ExecutionContext } from 'ava';

import { Meta } from './Meta';

test('componentPath', (t: ExecutionContext<any>): void => {
  t.is(Meta.componentPath({ options: { name: 'component' } }), 'component');
});

test('componentName', (t: ExecutionContext<any>): void => {
  t.is(Meta.componentName({ options: { name: 'component' } }), 'component');
});
