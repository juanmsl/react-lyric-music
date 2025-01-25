import styled from 'styled-components';

export const MainPageStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  align-content: start;
`;

export const MainPageMessageStyle = styled.section`
  display: grid;
  height: 100%;
  overflow: auto;
  place-content: center;
  justify-items: center;
  text-align: center;

  .message-icon,
  .message-title {
    color: ${props => props.theme.colors.primary.main};
  }
`;
