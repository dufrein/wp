import map from '../mocks/mock';

describe('map function',()=> {
  let array;
  let fn;

  beforeEach(()=> {
    array = [1,2,3,5];
    fn = jest.fn()
  });

  test('should call cb', ()=>{
    map(array,fn);
    expect(fn).toBeCalled();
    expect(fn).toBeCalledTimes(4);
    expect(fn.mock.calls.length).toBe(4);
  });
})