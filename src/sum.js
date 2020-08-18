import { resolvePlugin } from "@babel/core";
import axios from 'axios';

export const sum = (a, b) => a + b;
export const nativeNull =()=>null;
export class Lodash {
  compact(array) {
    return array.filter(val=>!!val)
  }
  groupBy(array, prop) {
    return  array.reduce((acc,i)=>{
      const key = typeof prop==='function'?prop(i):i[prop];
      if (!acc[key]){
        acc[key] = [];
      }
      acc[key].push(i);
      return acc;
    },{})
  }
}

export class Ajax {
  static echo(data){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        if (data){
          res(data);
        }
        else {
          rej(new Error('error'));
        }
      },200);
    })
  }

  static async get(){
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      return res.data;
    }
    catch(e){
      console.log(e);
    }
  }
}