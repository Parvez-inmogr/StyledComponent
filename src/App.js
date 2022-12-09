import logo from './logo.svg';
import './App.css';
import {StyledButton} from './Style/Button'
import {StyledWrapper} from './Style/Wrapper'
import {StyledPara} from './Style/Para'
import { Header } from './component/Header';
import { Hero } from './component/Hero';

function App() {
  // const fruit={
  //   names:[
  //     'Apple','Banana','Orange'
  //   ]
  // }
  return (
    
    <div className="App">
      
      <StyledWrapper>
      <Header></Header>
       
      <div>
        <h1>Welcome to StyledComponent </h1>
      </div>
      
      <Hero></Hero>
      {/* <div>
        {fruit.names.map((name, index)=>{
         return <StyledPara>Fruit:{name}</StyledPara>
        })}

      </div> */}
      
      
     
   

     
      
      </StyledWrapper>
      </div>
      
  );
}

export default App;
