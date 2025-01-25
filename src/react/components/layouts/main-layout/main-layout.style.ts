import styled from 'styled-components';

export const MainLayoutStyle = styled.main`
  min-width: ${props => props.theme.constants.breakpoints.mobile};
  display: grid;
  position: relative;
  grid-template-areas: 'navbar' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 30px;
  padding: 30px;
  height: 100%;
  overflow: auto;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
    grid-template-areas: 'navbar copy' 'content copy';
    grid-template-columns: 1fr 350px;
  }

  .navbar-container {
    grid-area: navbar;
  }

  .content-container {
    grid-area: content;
    height: 100%;
    overflow: auto;
  }

  .copy-container {
    grid-area: copy;
    height: 100%;
    overflow: auto;
    display: none;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopS}) {
      display: block;
    }
  }
`;
