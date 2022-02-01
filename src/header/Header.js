import {useState} from 'react';
import './Header.css'

function Header(props) {
    const [counter, setCounter] = useState(0)
    
    function up() {
        setCounter(counter + 1)
    }
    function down() {
        setCounter(counter - 1)
    }
    return(
        <div className="Header-site-header">
            <h1>{props.sitename}№{counter}</h1>
            <button onClick={up}>Up</button>
            <button onClick={down}>Down</button>
            <h2>{props.sitedescription}</h2>
        </div>
    );
}

export default Header;