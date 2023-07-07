import { Link } from "react-router-dom";
//provides the content to show on the main page
const Footer = () => (
  <footer>
    <nav>
      <ul>
        <hr />
        <li>
          <Link to="/Main">Home</Link>
        </li>
        <li>
          <Link to="/Auth">Account</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
