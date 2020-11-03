import React from 'react';
import ReactDOM from 'react-dom';

// 引入single-spa-react
import singleSpaReact from 'single-spa-react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// 开始对自应用配置
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.querySelector('#reactBox'),
  errorBoundary(err, info, props) {
    console.log('err, info, props', err, info, props);
    return (
      <div>This renders when a catastrophic error occurs</div>
    );
  },
})

// 处理公共路径和实例
if (!window.singleSpaNavigate) {
  // 不是作为子应用时，可以独立启动
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export const bootstrap = props => {
  console.log('react bootstrap', props);
  return reactLifecycles.bootstrap(() => {});
}
export const mount = props => {
  console.log('react mount', props);
  return reactLifecycles.mount(() => {});
}
export const unmount = props => {
  console.log('react unmount', props);
  return reactLifecycles.unmount(() => {});
}
