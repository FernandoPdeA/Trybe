import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { IoHomeOutline } from 'react-icons/io5';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { BsPlayCircle } from 'react-icons/bs';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="Sidebar">
        <nav>
          <Link to='/'>
            <IoHomeOutline />
            Home 
          </Link>
          <Link to='/content/'>
            <HiOutlineNewspaper />
            Conteúdo
          </Link>
          <Link to='/live-lectures'>
            <BsPlayCircle />
            Gravações
          </Link>
        </nav>
      </section>
    );
  }
}

export default Sidebar;
