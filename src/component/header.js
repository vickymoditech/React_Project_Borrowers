import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {

    return(

        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav" style={{cursor: 'pointer'}}>
                        <li><Link to={'/'}><div className="active">Home</div></Link></li>
                        <li><Link to={'/login'}><div className="active">Login</div></Link></li>
                        <li><a>Page 2</a></li>
                        <li><a>Page 3</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    );

}
export default Header;