import fs from 'fs';
import path from 'path';

import {it, expect, describe, vi} from 'vitest';
import {Window} from 'happy-dom';
import { createWidget } from '../helper/createWidget';
import TEST_DATA from "./tests-settings/testsMockData.json";
import TEST_SETTINGS from "./tests-settings/widgetTestsSettings.json";
const htmlDocPath = path.join(process.cwd(), 'test-index.html');
const htmlDoc = fs.readFileSync(htmlDocPath, 'utf8').toString();
const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal('document', document);

describe('testing createWidget()', () => {

  const TEST_WIDGET = document.querySelector(`#${TEST_SETTINGS.HTMLwidgetId}`);
  createWidget(TEST_DATA, TEST_WIDGET, TEST_SETTINGS);

  // it('should color the widget text', () => {
  //   expect(TEST_WIDGET.getComputedStyle.color).toBe("black");  TEST NOT WORKING
  // });

  it('should color the widget background', () => {
    expect(TEST_WIDGET.style.backgroundColor).toBe("transparent");
  });

  it('should create a div element with a class of w-header and inner text', () => {
    const header = TEST_WIDGET.querySelector('.w-header');
    expect(header).not.toBeNull();
    expect(header.innerText).toBe("test header");
  });

  it('should create a div element with the right id', () => {
    const widgetBox = TEST_WIDGET.querySelector('#test-box');
    expect(widgetBox).not.toBeNull();
  });

  it('should create the right numbers of recommendations', () => {
    const elements = TEST_WIDGET.getElementsByClassName('rec');
    expect(elements.length).toEqual(2);
  });

});