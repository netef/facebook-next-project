import { Facebook, Home, Search, ShoppingBag, Users } from "react-feather";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-container row center-items">
      <div className="row center-items gap-8 left-nav-container">
        <Facebook color="#0866ff" />
        <div className="row center-items gap-8 search">
          <Search color="#b0b3b8" size={16} />
          <input placeholder="Search..." />
        </div>
      </div>
      <div className="center-nav-container">
        <a href="/">
          <Home />
        </a>
        <a href="/">
          <ShoppingBag />
        </a>
        <a href="/">
          <Users />
        </a>
      </div>
      <div className="right-nav-container"></div>
    </nav>
  );
}
