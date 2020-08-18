import { Ajax } from "../sum.js";
import axios from 'axios';

jest.mock('axios');

describe("ajax echo", () => {
  test("should return value async", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });
  test("should return value with promise ", async () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });
  test("should catch error with promise ", async () => {
    return Ajax.echo("some data").catch((err) => {
      expect(err).toBeInstanceOf(error);
    });
  });
  test("should return value with promise 2", async () => {
    try {
      await Ajax.echo();
    } catch (err) {
      expect(err.message).toBe("error");
    }
  });
});

describe('ajax get', ()=> {
  let res;
  let todos;

  beforeEach(()=> {
    todos = [
      {id:1, title: 'Todo 1', completed:false}
    ];
    res = {
      data: {
        todos
      }
    }
  })
  
  test('should return data from sever', ()=> {
    axios.get.mockReturnValue(res);
    return Ajax.get().then(data=> {
       expect(data.todos).toEqual(todos);
     });
  });
})  