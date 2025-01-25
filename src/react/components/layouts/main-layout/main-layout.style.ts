import styled from 'styled-components';

export const MainLayoutStyle = styled.main`
  min-width: ${props => props.theme.constants.breakpoints.mobile};
  display: grid;
  position: relative;
  grid-template-columns: 1fr auto;
  height: 100%;
  overflow: auto;

  .layout-container {
    padding: 30px;
  }
`;
