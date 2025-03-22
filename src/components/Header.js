import Nav from "./Nav"
import logo from "../images/logo.png";

export default function Header() {

return (
      <header>
        {/* <Link to="/"> */}
        <img src={logo} alt="little lemon"/>
        {/* </Link> */}
        <Nav/>
      </header>
    )
}
