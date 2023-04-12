import styled from "styled-components";

export const Container = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #161b22;
  width: 100%;
  height: 110px;

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
  input {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  ul li {
    list-style: none;
  }

  ul a:last-child {
    margin-right: 80px;
  }

  ul a {
    padding: 0 6%;
    text-decoration: none;
    color: #f7f7f7;
    font-size: 18px;
  }

  ul a:hover {
    color: #fff;
  }
  @media screen and (max-width: 780px) {
    h1 {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 588px) {
    height: 100px;

    .profile {
      position: absolute;
      left: 15px;
    }
    img {
      margin-top: -10px;
    }
    h1 {
      display: none;
    }

    label {
      position: absolute;
      display: flex;
      left: 87%;
      top: 25px;
      transition: all 300ms linear;
      height: 30px;
      width: 30px;
      cursor: pointer;
    }
    ul a:last-child {
      margin-right: 0;
    }

    .menuB {
      position: absolute;
      display: block;
      background: #f7f7f7;
      width: 30px;
      height: 3px;
      top: 12px;
      transition: 400ms ease-in-out;
    }

    .menuB:before,
    .menuB:after {
      background: #f7f7f7;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 400ms ease-in-out;
    }

    .menuB:before {
      top: -10px;
    }

    .menuB:after {
      bottom: -10px;
    }

    input:checked ~ label .menuB {
      transform: rotate(45deg);
      background: #464b8b;
    }

    input:checked ~ label .menuB:before {
      transform: rotate(90deg);
      top: 0;
    }

    input:checked ~ label .menuB:after {
      transform: rotate(90deg);
      bottom: 0;
      background: #464b8b;
    }

    input:checked ~ .menu ul {
      justify-content: flex-end;
      height: 110px;
      width: 100vw;
      z-index: 5;
      display: flex;
      margin-top: 20px;
    }

    .menu ul {
      padding: 5px;
      transition: all 0.6s;
      display: none;
      margin-top: -80px;
      z-index: 1;
    }

    .menu ul li {
      color: #f7f7f7;
      font-size: 15px;
      margin-top: 30px;
      padding: 0;
      margin-bottom: -20px;
    }
  }
  @media screen and (max-width: 400px) {
    input:checked ~ .menu ul {
      margin-top: 30px;
    }
  }
`;
