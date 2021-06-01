import styled from "styled-components";

/* Full-width inputs */
export const Input = styled.input`
  && {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-flex;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
`;

/* Set a style for all buttons */
export const Button = styled.button`
  && {
    background-color: #04aa6d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    button:hover {
      opacity: 0.8;
    }
  }
`;

/* Add a hover effect for buttons */

/* Add padding to containers */
export const Container = styled.div`
  && {
    display: inline-flex;
    align-content: center;
    width: 400px;
    padding: 16px;
    margin: 150px 0;
    border: 10px solid #a1a1a1;
  }
`;
