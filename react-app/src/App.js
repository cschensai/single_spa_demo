// 引入recat-router-dom
import { BrowserRouter, Link, Route } from 'react-router-dom';

// 测试css隔离
import './App.css';


function App() {
  // 测试js隔离---子应用 设置值
  window.baseApp = 22;

  const Page2 = () => '我是page2';

  return (
    <div className="App">
      learn react
      <hr />
      <BrowserRouter basename="/react">
        <Link to="/page1" style={{ marginRight: 20 }}>page1</Link>
        <Link to="/page2">page2</Link>
        <br />
        <br />
        <Route path="/page1" render={() => '我是page1'} />
        <Route path="/page2" component={Page2} />
      </BrowserRouter>
    </div>
  );
}

export default App;
