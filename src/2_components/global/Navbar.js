import styled from 'styled-components';
import logo from '../../0_assets/kasa_logo.svg';
import { NavLink } from 'react-router-dom';
import { links } from '../../4_data/links';

const Navbar = () => {
  return (
    <NavContainer>
      <div className="section-center nav-center">
        <img src={logo} alt="logo" className="logo kasa" />
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink to={url}>{text}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </NavContainer>
  );
};
export default Navbar;

const NavContainer = styled.nav`
  padding: 2rem;
  max-height: var(--navbar-height);

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 21rem;
    height: auto;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 6rem;
  }

  .nav-links > li {
    font-size: 2.4rem;
  }

  .nav-links > li:hover {
    text-decoration: underline;
    text-decoration-color: var(--color-text-red);
    text-decoration-thickness: 0.15rem;
    text-underline-offset: 0.2rem;
  }

  @media only screen and (max-width: 767px) {
    .nav-links > li {
      text-transform: uppercase;
      color: black;
    }
    .nav-links {
      gap: 3rem;
    }
  }
`;
