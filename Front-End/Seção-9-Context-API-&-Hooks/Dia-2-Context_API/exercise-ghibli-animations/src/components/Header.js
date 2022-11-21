import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Filmes</Link>
        <Link to="/favorites">Favoritos</Link>
      </nav>
    </header>
  );
}
