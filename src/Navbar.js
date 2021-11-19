import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <h1>React Form Validation</h1>
            <div className="nav-menu">
                <NavLink to="/formik" exact activeClassName="active">Formik and Yup</NavLink>
                <NavLink to="/hook_form" activeClassName="active">React Hook Form</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;