import React from 'react';
import { Link } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Link to="/mypage">마이페이지</Link>
    </div>
  );
}

export default App;
