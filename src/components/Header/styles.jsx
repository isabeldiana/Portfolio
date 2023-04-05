import styled from "styled-components";

export const Container = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #161b22;
  width: 100%;

  img {
    padding: 5px 0;
    height: 80px;
    border-radius: 50%;
  }
  h1 {
    text-align: left;
    font-family: Raleway;
    color: #ededed;
  }
  .profile {
    gap: 12px;
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled("div")`
  display: flex;
  align-items: center;

  a {
    margin: 10px;
    font-size: 18px;
    text-decoration: none;
    color: #ededed;
  }
`;
