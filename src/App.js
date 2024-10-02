import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Header /> {/* 모든 페이지에 헤더 표시 */}
      <Home />   {/* 모든 섹션을 하나의 페이지에 표시 */}
      <Footer /> {/* 모든 페이지에 푸터 표시 */}
    </div>
  );
}

export default App;
