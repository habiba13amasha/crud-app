import{Link} from "react-router-dom"
function Sidebar(){
    return(
        <>
        <ul className="list-unstyled">
            <li>
                <Link to="/products">get all Products</Link>
            </li>
            <li>
                <Link to="/categories">get all Categories</Link>
            </li>
        </ul>
        </>
    );
}
export default Sidebar;