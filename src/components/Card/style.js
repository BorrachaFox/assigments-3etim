import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0;}
  100% {opacity: 1;}
`;


export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 680px;
  width: 100%;
  background: ${(props) => props.theme.colors.elementBg};

  padding: 20px 26px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  :hover {
    cursor: pointer;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  }

  .description {
    margin: 16px 0;
  }  

  .description > p {
    animation: .5s ${fadeIn} ease-out;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 12px;

  .date {
    margin-left: 12px;
    font-weight: bold;
  }
`;