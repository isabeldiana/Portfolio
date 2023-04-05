import { createGlobalStyle } from "styled-components";
export default createGlobalStyle `

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
}
body {
  
  background-color: #373a47;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 10px;
}
`