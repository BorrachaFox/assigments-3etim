import styled from 'styled-components';

export const AssigmentListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  max-width: 680px;

  margin-bottom: 16px;
  
  button {
    width: 100px;
    height: 32px;

    color: white;
    background: #1C2833; // light theme = #273746 | dark theme = #1C2833
    border: 1px solid #212F3D; 
    border-radius: 2px;

    margin-left: auto;
  }

  input[type=text] {
    width: 100%;
    margin-right: 8px;

    outline: none;
  }
`;

