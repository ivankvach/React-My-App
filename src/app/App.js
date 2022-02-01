import Header from '../header/Header.js';
import Main from '../main/Main.js';
import Sidebar from '../sidebar/Sidebar.js';
import Footer from '../footer/Footer.js';
import './App.css';

function App() {
    return(
        <div className='container'>
            <Header/>
            <Main/>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default App;