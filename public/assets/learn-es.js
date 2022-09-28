/* -------------------------------------------------------------------------- */
/* arrow function                                                             */
/* default parameter                                                          */
/* -------------------------------------------------------------------------- */
// const getNode = (selector, context = document) => {
//   return context.querySelector(selector);
// };

// const getNode = (selector, context = document) =>
//   context.querySelector(selector);

const getNode = (selector) => document.querySelector(selector);

/* -------------------------------------------------------------------------- */
/* block scope                                                                */
/* -------------------------------------------------------------------------- */

// let을 사용할 때: 숫자, 문자, 불리언, null, undefined, Symbol, bigint
// const를 사용할 때: 객체, 배열 객체, 함수 객체
// DOM 요소 노드 (객체)
const button = getNode('.Button');

/* -------------------------------------------------------------------------- */
/* template literal                                                           */
/* -------------------------------------------------------------------------- */

let firstLetter = 'S';

// button.insertAdjacentHTML('beforeend', '<em>' + firstLetter +'</em>tart');
// button.innerHTML = '<em>' + firstLetter +'</em>tart';
// 역 따옴표 (backtick : `)
// 보간: interpolation
button.innerHTML = `<em>${firstLetter}</em>tart`;

/* -------------------------------------------------------------------------- */
/* tagged template                                                            */
/* -------------------------------------------------------------------------- */

// CSS in JS
// styled-components
// emotion

const count = getNode`.Count`;

console.log(count);

/* -------------------------------------------------------------------------- */
/* spread syntax                                                              */
/* -------------------------------------------------------------------------- */

// mixin

const cssMap = {
  color: 'tan',
  background: 'white',
};

const userMap = {
  fontSize: '2rem',
  color: 'indigo',
};

const cssRuleMixin = {
  ...cssMap,
  ...userMap,
};

console.log(cssRuleMixin);
console.log(Object.isFrozen(cssRuleMixin));
console.log(Object.freeze(cssRuleMixin));
console.log(Object.isFrozen(cssRuleMixin));

/* -------------------------------------------------------------------------- */
/* rest parameter                                                             */
/* -------------------------------------------------------------------------- */

const sum = (first, second, ...args) => {
  console.log(args);
};

sum(20, 3, -2, 1, 2, 101);

/* -------------------------------------------------------------------------- */
/* destructuring assignment                                                   */
/* -------------------------------------------------------------------------- */

// var color = cssRuleMixin.color;
// var background = cssRuleMixin.background;
// var fontSize = cssRuleMixin.fontSize;

const stateHook = [
  0,
  (newCount) => {
    console.log('update count');
  },
];

// `state` immutable
// updator

const [number, setNumber] = stateHook; // [state, setState]

console.log(number, typeof setNumber);

const { color, background, fontSize } = cssRuleMixin; // { color, background, fontSize }

console.log(color);
console.log(background);
console.log(fontSize);

/* -------------------------------------------------------------------------- */
/* nullish coalescing operator                                                */
/* -------------------------------------------------------------------------- */

function defaultArg(value, initialValue) {
  // nullish (null 또는 undefined 감지)
  // if (value === undefined || value === null) {
  //   value = initialValue;
  // }

  return value ?? initialValue;
}

function getNodeList(selector, context) {
  context = defaultArg(context, document);
  return context.querySelectorAll(selector);
}

console.log(getNodeList('em', button));

/* -------------------------------------------------------------------------- */
/* optional chaining                                                          */
/* -------------------------------------------------------------------------- */

const state = {
  count: 100,
  getCount() {
    return this.count;
  },
  setCount(newCount) {
    this.count = newCount;
  },
};

// if ('loadData' in state && typeof state.loadData === 'function') {
//   state.loadData();
// }

// ?:
// ??
// ?.

console.log(state.getCount?.());

/* -------------------------------------------------------------------------- */
/* Iterable & for - of                                                        */
/* -------------------------------------------------------------------------- */

const members = ['아이언맨', '스파이더맨', '헐크'];

for (let member of members) {
  console.log(member);
}

const user = {
  name: '연오랑',
  age: 21,
  isLive: true,
};

for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}
