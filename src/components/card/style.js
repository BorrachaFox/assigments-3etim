import styled from 'styled-components';

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 600px;
  background: #2d2d2d;

  padding: 20px 26px;
  margin-bottom: 20px;
  border-radius: 2px;

  :hover {
    cursor: pointer;
  }

  h2 {
    margin-bottom: 16px;
    transition: .2s;
  }

  p {
    transition: .2s;
  }
`;