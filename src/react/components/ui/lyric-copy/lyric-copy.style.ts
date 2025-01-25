import styled from 'styled-components';

export const LyricCopyStyle = styled.section`
  background: ${props => props.theme.colors.background.paper};
  color: ${props => props.theme.colors.text.main};
  padding: 30px;
  margin: 30px 30px 30px 0;
  border-radius: 10px;
  display: none;
  gap: 20px;
  grid-template-rows: auto 1fr auto;
  height: calc(100dvh - 60px);
  overflow: auto;
  position: sticky;
  top: 30px;
  width: 350px;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    display: grid;
  }

  .copy-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 20px;

    &--close {
      cursor: pointer;
    }
  }

  .copy-content {
    display: grid;
    gap: 10px;
    align-content: start;
  }

  .copy-title {
    color: ${props => props.theme.colors.primary.main};
  }

  .copy-footer {
    background: ${props => props.theme.colors.background.main};
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1em;
    padding: 20px 15px;
    align-items: center;
    border-radius: 10px;

    &--icon {
      color: ${props => props.theme.colors.primary.main};
      font-size: ${props => props.theme.constants.typography.header1.fontSize};
    }

    &--content {
      display: grid;
      gap: 10px;
    }
  }
`;
