import styled from 'styled-components';

export const LyricCopyStyle = styled.section`
  background: ${props => props.theme.colors.background.paper};
  color: ${props => props.theme.colors.text.main};
  padding: 30px;
  border-radius: 10px;
  display: grid;
  gap: 20px;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  overflow: auto;

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
