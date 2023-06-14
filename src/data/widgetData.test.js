import {it, expect, describe} from 'vitest';
import { getData } from './widgetData';

it('getData() should return an object with an id and a list', async ()=>{
  const data = await getData();
  expect(data.id).not.toBeNull();
  expect(data.list).not.toBeNull();
});