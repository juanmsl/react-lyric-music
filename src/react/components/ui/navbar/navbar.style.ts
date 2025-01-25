import { Typography } from 'juanmsl/ui';
import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  background: ${props => props.theme.colors.background.paper};
  color: ${props => props.theme.colors.text.main};
  padding: 0 20px 0 0;
  border-radius: 10px;
  display: grid;
  gap: 40px;
  align-items: center;
  grid-auto-flow: column;
  justify-content: space-between;

  .navbar-logo {
    position: relative;
    font-size: 163px;

    &--image {
      width: 1em;
      aspect-ratio: 10/5;
      object-fit: contain;
      display: block;
    }

    &--title {
      display: block;
      color: ${props => props.theme.colors.primary.light};
      position: absolute;
      top: 8.2375em;
      left: 14.155em;
      font-size: 0.04em;
      text-transform: uppercase;
      letter-spacing: 0.5em;
    }
  }

  .navbar-filters {
    display: none;
    gap: 40px;
    align-items: center;
    justify-content: start;
    grid-template-columns: auto 1fr;
    width: 100%;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.laptopL}) {
      display: grid;
    }

    &--categories {
      display: grid;
      grid-auto-flow: column;
      gap: 10px;
      align-items: center;
      justify-content: start;
    }

    &--input {
      background: ${props => props.theme.colors.background.main};
      padding: 0.6em 1em;
      border-radius: 100px;

      input {
        padding: 0;
        border-radius: 0;
      }
    }
  }

  .navbar-actions {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    align-items: center;
    justify-content: end;
    font-size: ${props => props.theme.constants.typography.header4.fontSize};
    color: white;
    cursor: pointer;

    &--link {
      border-radius: 50%;
      padding: 0.5em;
      width: 40px;
      height: 40px;

      &.active {
        background: ${props => props.theme.colors.primary.main};
      }
    }
  }
`;

export const FilterButton = styled(Typography)`
  border-radius: 100px;
  background: ${props => props.theme.colors.background.main};
  padding: 0.3em 1em !important;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 70px;

  &.active {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.contrast};
  }
`;
