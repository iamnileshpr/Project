import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <div className="footer_content">
        <h3>🍽️ FoodieHub</h3>
        <p>Discover delicious recipes from around the world.</p>

        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} FoodieHub. All rights reserved.
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  margin-top: 0px;
  padding: 40px 20px;
  width: 40cm;
  text-align: center;
  font-family: sans-serif;

  backdrop-filter: blur(12px);
  background: #1B211A;
  color: white;

  .footer_content {
    max-width: 1200px;
    margin: auto;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 22px;
  }

  p {
    margin-bottom: 20px;
    font-size: 14px;
    opacity: 0.8;
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .socials a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s;
  }

  .socials a:hover {
    color: red;
  }

  .copyright {
    font-size: 12px;
    opacity: 0.6;
  }

  @media (max-width: 600px) {
    .socials {
      flex-direction: column;
      gap: 10px;
    }
  }
`;