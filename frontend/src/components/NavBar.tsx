import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserType } from '../utils/types';
import LogoutBtn from './LogoutBtn';
import DropdownMenu from './DropdownMenu';
import DropdownIcon from '../assets/images/dropdown-icon.png';
import '../styles/NavBar.css';

interface NavBarProps {
  loggedInUser: UserType | null;
  handleLogout: () => void;
}

const NavBar = ({ loggedInUser, handleLogout }: NavBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleVisibleClick = () => setIsVisible((prev) => !prev);

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <nav id="navbar">
      {loggedInUser ? (
        <Link to="/profile">Profile</Link>
      ) : (
        <Link to="/register">Sign Up</Link>
      )}
      <div className="dropdown">
        <button
          className="dropdown-open"
          type="button"
          onClick={handleVisibleClick}
        >
          Categories
          <img
            className="icon nav-icon"
            src={DropdownIcon}
            alt="dropdown chevron"
          />
        </button>
        {isVisible && <DropdownMenu handleClick={handleVisibleClick} />}
      </div>
      {loggedInUser ? (
        <Link to="/saved">Saved</Link>
      ) : (
        <Link to="/login">Log In</Link>
      )}
      {loggedInUser && <LogoutBtn handleLogout={handleLogoutClick} />}
    </nav>
  );
};

export default NavBar;
