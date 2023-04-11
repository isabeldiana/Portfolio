import styled from "styled-components";

export const Container = styled("footer")`
  background-color: #011318;
  margin-top: auto;
  display: flex;
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

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;

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
    text-decoration: none;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
   margin-top: 10px;
  }
`;
