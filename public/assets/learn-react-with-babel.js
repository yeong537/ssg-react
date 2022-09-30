const container = document.getElementById('root');

// React Element vs. React Component
// Object vs. Class / Function

// React Component → React Element 생성

const Logo = () => (
  <img
    className="Logo"
    src="assets/sinsegae.png"
    alt="신세계 I&amp;C"
    height="60"
  />
);

const Headline = () => (
  <h2 className="Headline" lang="en">
    Premier IT Partner &amp; Value Creator
  </h2>
);

const Description = () => (
  <p className="Description">
    최고 수준의 IT서비스로 고객 비즈니스 성공의 핵심 파트너로
    성장해나가겠습니다.
  </p>
);

// React.createElement('div')
// React.createElement(Logo)
// React.createElement(React.Framgment)

const App = () => (
  <div className="App">
    <Logo />
    <Headline />
    <Description />
  </div>
);

// JSX = XML like syntax for ECMAScript(JavaScript)

React.createElement(React.StrictMode);

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
