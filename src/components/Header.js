import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";

const StyledHeader = styled.header`
  max-width: 100%;
  height: 100px;
  background-color: #04b486;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledNav = styled.nav`
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    margin-left: 20px;
    font-size: 1.2rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #4effc4;
  text-decoration: none;
  font-size: 1.4rem;

  &.active {
    color: #fff;
    font-weight: bold;
    border-bottom: #fff 2px solid;
  }
`;

const StyledCartBtn = styled.button`
  background-color: #fb8500;
  color: #fff;
  font-weight: bold;
  padding: 1rem 1.2rem;
  border:none;
  border-radius: 5px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <ul>
          <li>
            <StyledNavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : null)}
            >
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to='/cart'
              className={({ isActive }) => (isActive ? 'active' : null)}
            >
              Cart
            </StyledNavLink>
          </li>
        </ul>
      </StyledNav>
      <StyledCartBtn>
      <FaShoppingCart style={{marginRight: '10px'}}/>
        CART
      </StyledCartBtn>
    </StyledHeader>
  );
};

export default Header;
