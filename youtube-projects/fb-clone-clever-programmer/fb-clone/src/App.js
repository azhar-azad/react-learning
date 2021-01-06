import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      
      {/*Header*/}
      <Header />
      
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      
      
    </div>
  );
}

export default App;
