import styled from "styled-components";

export const Container = styled("footer")`
  background-color: #011318;
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  margin-top: 30px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Raleway", sans-serif;
    color: #ededed;
    gap: 4px;
  }
`;
export const SocialMedia = styled("div")`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0 15px 0;
`;
export const Certificate = styled("div")`
  h1 {
    padding: 10px 0 15px 0;
    text-align: left;
    font-size: 22px;
    font-family: "Raleway", sans-serif;
    color: #ededed;
  }
  a {
    font-family: "Roboto", sans-serif;
    display: flex;
    margin: 5px;
    text-align: left;
    font-size: 14px;
    color: #add8e6;
    text-align: left;
    text-decoration: none;
  }
`;
