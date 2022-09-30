import App from '/assets/App.js';

const { StrictMode } = React;
const { createRoot } = ReactDOM;

const rootElement = document.getElementById('root');
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
