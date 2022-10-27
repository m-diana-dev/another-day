import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import Water from './components/Water/Water';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/tasks/*" element={<Tasks tasksData={props.state.tasksPage.tasksData} tasksMenuData={props.state.tasksPage.tasksMenuData} />} />
            <Route path="/water" element={<Water waterData={props.state.waterPage.waterData} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
