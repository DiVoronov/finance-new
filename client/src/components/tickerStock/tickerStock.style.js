import styled from 'styled-components';

export const StyledGrid = styled.div`
max-width: 90%;
flex-grow: 1;
margin: auto;
& > div:hover {
  background: #f7f7f7;
}

& .classAddTicker {
  animation: adding .5s ease-in-out 0s;
}

& .classRemoveTicker {
  animation: removing .5s ease-in-out 0s;
}

@keyframes adding {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(.97);
    opacity: .5;
  }
  100% {
    transform: scale(1)
    opacity: 1;
  }
}

@keyframes removing {
  0% {
    transform: scale(1);
    opacity: 1;
    :hover {
      background: none;
    }
  }
  100% {
    transform: scale(.7) translate( -400px , 0px ) ;
    opacity: 0;
  }
}
`;



export const StyledTickerStock = styled.div`
background: none;
height: 3rem;
border-bottom: 1px solid lightgrey;
display: flex;
align-items: center;
padding: .5rem 1rem;
justify-content: center;
transition: appear .2s ease-in-out 0s;

& div {
  font-family: 'Open Sans';
  color: ${ props => props.theme.color };
  animation: appear .2s ease-in-out 0s;
}

& .tickerName {
  border-radius: 15px;
  border: .5px solid lightgrey;
  padding: .7rem;
  background: ${ props => props.theme.background };
}

& .price {
  padding: .6rem;
  border-radius: 15px;
  background: ${ props => props.theme.background }; 
  color: ${ props => props.theme.color };
}

& .yield {
  padding: .6rem;
  padding-left: .8rem;
  border-radius: 15px;
  background: ${ props => props.theme.background }; 
  color: ${ props => props.theme.color };
  display: flex;
  gap: .2rem;
}

& .change_percent {
  padding: .6rem;
  padding-left: .8rem;
  border-radius: 15px;
  background: ${ props => props.theme.background }; 
  color: ${ props => props.theme.color };
  display: flex;
  gap: .2rem;
}


& .addToFavorite {
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;