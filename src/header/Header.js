import './Header.css'

function Header(props) {
    return(
        <div className="Header-site-header">
            <h1>{props.sitename}</h1>
            <h2>utp slogan</h2>
        </div>
    );
}

export default Header;