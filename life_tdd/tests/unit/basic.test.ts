import HelloWorld from '../../src/components/HelloWorld.vue';
import {test, expect} from 'vitest';

test('basic', async () => {
  expect(HelloWorld).toBeTruthy();
});
