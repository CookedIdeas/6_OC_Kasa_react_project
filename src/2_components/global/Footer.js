import styled from 'styled-components';
import whiteLogo from '../../0_assets/kasa_logo_white.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <img src={whiteLogo} alt="logo kasa blanc" className="footer-logo" />
      <p className="footer-text">
        &#169; {new Date().getFullYear()} Kasa. All right reserved
      </p>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 6.6rem 0 2rem 0;
  max-height: var(--footer-height);

  .footer-logo {
    width: 12rem;
    height: auto;
  }

  .footer-text {
    color: white;
    font-size: 2.4rem;
  }

  @media only screen and (max-width: 767px) {
  }
`;
