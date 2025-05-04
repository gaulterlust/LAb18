import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li><Link to="/about">Про мене</Link></li>
          <li><Link to="/my-city">Моє місто</Link></li>
          <li><Link to="/my-future">Майбутнє</Link></li>
        </ul>
      </nav>
    </header>
  );
}
