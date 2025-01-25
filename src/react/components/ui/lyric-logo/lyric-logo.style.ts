import styled from 'styled-components';

type LyricLogoStylesProps = {
  size: number | `${number}`;
};

export const LyricLogoStyles = styled.section<LyricLogoStylesProps>`
  position: relative;
  font-size: ${props => props.size}px;

  .logo-image {
    width: 1em;
    aspect-ratio: 10/5;
    object-fit: contain;
    display: block;
  }

  .logo-title {
    display: block;
    color: ${props => props.theme.colors.primary.light};
    position: absolute;
    top: 8.2375em;
    left: 14.155em;
    font-size: 0.04em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
  }
`;
