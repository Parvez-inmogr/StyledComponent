import logo from './logo.svg';
import './App.css';
import {StyledButton} from './Style/Button'
import {StyledWrapper} from './Style/Wrapper'
import {StyledPara} from './Style/Para'

function App() {
  const fruit={
    names:[
      'Apple','Banana','Orange'
    ]
  }
  return (
    
    <div className="App">
      <StyledWrapper>
      <div>
        <h1>Welcome to StyledComponent </h1>
      </div>
      <div>
        {fruit.names.map((name, index)=>{
         return <StyledPara>Fruit:{name}</StyledPara>
        })}

      </div>
      
      
     
   

      </StyledWrapper>
      <StyledButton>Submit</StyledButton>
      </div>
      
  );
}

export default App;
