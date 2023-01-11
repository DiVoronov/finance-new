import styled from 'styled-components';

export const StyledTickerStock = styled.div`
background: none;
height: 3rem;
border-bottom: 1px solid lightgrey;
display: flex;
align-items: center;
padding: .5rem 1rem;
justify-content: center;
& div {
  font-family: 'Open Sans';
  color: ${ props => props.theme.color };
  
  & > svg {
  }
}
& .tickerName {
  border-radius: 15px;
  border: .5px solid lightgrey;
  padding: .7rem;
  background: ${ props => props.theme.background };
}

& .addToFavorite {
  cursor: pointer;
}
`;