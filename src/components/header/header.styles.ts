import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  background-color: #f1f1f1;
  text-align: center;
`;

/* The navbar container */
export const Topnav = styled.nav`
  overflow: hidden;
  background-color: #333;
`;

export const Menu = styled(Link)`
  cursor: pointer;
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  :hover {
    background-color: #ddd;
    color: black;
  }
`;

export const Logout = styled(Menu)`
  float: right;
`;
