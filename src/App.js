import logo from './logo.svg';
import './App.css';

function App() {
  let name = "박예슬"

  return (
    <div className="App">
      {name}
      <p style={{color: 'orange', fontSize: '20px'}}>안녕하세요! 리액트 반입니다 :)</p>
      <input type="text" />
    </div>
  );
}

export default App;
