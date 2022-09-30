// DOM API
// const appNode = document.createElement('div');
// appNode.classList.add('App');
// console.log('실제 DOM 요소 노드:', appNode);

/* React.createElement alias `h` -------------------------------------------- */
const { createElement: h } = React;

/* `img` react element ------------------------------------------------------ */

const image = h('img', {
  className: 'Logo',
  src: 'assets/sinsegae.png',
  alt: '신세계 I&C',
  height: 60,
});
// console.log(image);

const headline = h(
  'h2',
  {
    className: 'Headline',
    lang: 'en',
    children: 'Premier IT Partner &amp; Value Creator',
  }
  // 'Premier IT Partner &amp; Value Creator'
);

const paragraph = h(
  'p',
  {
    className: 'Description',
  },
  '최고 수준의 IT서비스로 고객 비즈니스 성공의 핵심 파트너로 성장해나가겠습니다.'
);

// React API
// create Virtual DOM Node
// 실제 DOM 요소 노드 추상화
// React.createElement(type[, props][, ...children]);
const app = h('div', { className: 'App' }, image, headline, paragraph);
// console.log(app);
// console.log('가상 DOM 노드 = React Element', app);

/* -------------------------------------------------------------------------- */
/* Rendering React Application                                                */
/* -------------------------------------------------------------------------- */

// Web App = React + ReactDOM

// container node (실제 DOM 노드)
const container = document.getElementById('root');

// v17 API (support IE)
// ReactDOM.render(app, container, () => {
//   console.log('rendered react web app');
// });

// v18 API (not support IE)
const reactDomRoot = ReactDOM.createRoot(container);

reactDomRoot.render(app);

setTimeout(() => {
  reactDomRoot.unmount();
}, 3000);
