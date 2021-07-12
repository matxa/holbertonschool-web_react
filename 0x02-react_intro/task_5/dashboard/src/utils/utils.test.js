// Testing Utils
import MockDate from 'mockdate'
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test Utils', () => {

  beforeEach(() => {
    MockDate.set(1487076708000)
  });

  it('getFullYear', () => {
    expect(getFullYear()).toBe(2017);
    MockDate.reset();
  });

  it('getFooterCopy', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });
  
  it('getLatestNotification', () => {
    const str = getLatestNotification();
    expect(str).toContain('<strong>');
    expect(str).toContain('</strong>');
  });
  

});

