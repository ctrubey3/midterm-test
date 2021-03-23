import {Link} from "react-router-dom"
function Nav(){
    return(
        <nav>
            <Link   to={"/"}>All</Link>
            <Link  to={"/Animation/"}>Animation</Link>
            <Link  to={"/Games/"}>Games</Link>
            <Link  to={"/Television/"}>Television</Link>
        </nav>
    )
}
export default Nav;