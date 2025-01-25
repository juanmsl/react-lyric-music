import styled from 'styled-components';

export const BandCardStyle = styled.section`
  background: ${props => props.theme.colors.background.paper};
  border-radius: 10px;
  position: relative;

  .band-image {
    width: 100%;
    aspect-ratio: 2 / 1;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .band-name {
    color: ${props => props.theme.colors.primary.main};
  }

  .band-data-content {
    padding: 20px;
    display: grid;
    gap: 10px;
  }

  .band-album {
    color: ${props => props.theme.colors.text.light};
  }

  .band-description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
