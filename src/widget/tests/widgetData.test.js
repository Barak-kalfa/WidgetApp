import {it, expect, describe} from 'vitest';
import { getData } from '../data/widgetData';
import testSettings from "./tests-settings/widgetTestsSettings.json"

it('getData() should return an object with an id and a list', async ()=>{
  const data = await getData(testSettings);
  expect(data.id).not.toBeNull();
  expect(data.list).not.toBeNull();
});