import { pipe, calculate } from "./packages/myreactjs";

const arr = [1, 2, 3, 14];

const add = (num, rem) => {
  return num + rem;
};
const subtract = (num) => {
  return num - 1;
};
const multiple = (num) => {
  return num * 4;
};

const acc = (a) => {
  return a.reduce((acc, curr) => acc - curr, 0);
};

const check=(num)=>{
  if(num.every(item => typeof item === 'number')){
    return num
  }else{
    return 'all elements must be numbers'
  }
}

const caller = calculate(10)


export const res = caller.add(5).print()
