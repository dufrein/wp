import { sum,nativeNull } from '../sum.js';

describe('sum',()=> {
  test('My first test', () => {
    expect(sum(3, 3)).toBe(6);
    expect(sum(3, 3)).toEqual(6);
  });
  
  test('be greater then',  ()=> {
    expect(sum(2,3)).toBeGreaterThanOrEqual(3)
  })
  
  test('sum of 2 float values', ()=> {
    expect(sum(0.1,0.2)).toBeCloseTo(0.3)
  })
});

describe('native null',()=> {

  
  test('should return null ', ()=> {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
  })
});

