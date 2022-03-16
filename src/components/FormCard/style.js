import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FormCardDiv = styled.div`
  width: 100%;
  height: 50vh;

  max-width: 800px;
  padding: 26px;

  background-color: #2d2d2d;
  border-radius: 5px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

  animation: ${fade} .2s linear;

  h2 {
    font-size: 26px;
    margin-bottom: 36px;
  }

  form > {
    display: flex;
    flex-direction: column;
  }

  form > label {
    font-size: 20px;
  }

  form > input, textarea {
    width: 100%;
    height: auto;
    
    border: none;
    outline: none;
    
    background-color: #3d3d3d;
    padding: 10px 8px;
    margin: 4px 0 10px;
    border-radius: 2px;

    font-size: 16px;
    color: #F2F2F2;
  }

  input[type=date] {
    height: auto;
    
    border: none;
    outline: none;
    
    background-color: #3d3d3d;
    padding: 10px 8px;
    margin: 4px 0 10px;
    border-radius: 2px;

    font-size: 16px;
    color: #F2F2F2;
  }
`;