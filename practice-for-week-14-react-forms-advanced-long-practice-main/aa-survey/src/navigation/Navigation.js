import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <h1>Navigation Bar</h1>
            <nav>
                <NavLink exact to="/">Home Page</NavLink>
                <NavLink to="/sample-survey">Sample Survey</NavLink>
                <NavLink to="/survey2">Survey 2</NavLink>
            </nav>
        </>

    )
  }

  export default Navigation;
