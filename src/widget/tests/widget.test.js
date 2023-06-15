import fs from 'fs';
import path from 'path';

import {it, expect, describe, vi} from 'vitest';
import {Window} from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDoc = fs.readFileSync(htmlDocPath, 'utf8').toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal('document', document);

describe('startWidget() should create a full widget with the correct settings', () => {

it('should locate a div with a id of widget', ()=>{
  const widget = document.querySelector('#widget');
  expect(widget).not.toBeNull();
})

it('should have the right header', ()=>{});
it('should have the right text color', ()=>{});
it('should have the right background color', ()=>{});
it('should have only filtered recs', ()=>{});
});