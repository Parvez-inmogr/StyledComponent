import styled from "styled-components";

export const Card=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${(props) => props.inverted? 'green' : 'red' };  //important  changing what props it receive

padding: 10px ${({defaultPadding})=>defaultPadding}px;


`