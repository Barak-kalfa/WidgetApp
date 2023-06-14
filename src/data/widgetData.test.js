import {it, expect, describe} from 'vitest';
import { getData } from './widgetData';
import testOptions from "../../widgetTestsOptions.json"

it('getData() should return an object with an id and a list', async ()=>{
  const data = await getData(testOptions);
  expect(data.id).not.toBeNull();
  expect(data.list).not.toBeNull();
});