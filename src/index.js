import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


    {/* using ThemeProvider
        use ThemeProvider from StyledComponent
        <ThemeProvider theme={theme}></ThemeProvider>
        styled component
        const theme={
        color:{
          text:'red',
          bg:'green'
        } 
        responsive:{
          mobile:'760px',
          tab:'1080'
        }
        
        */}
{/* 
        component e 
        @media (max-width:${({theme})=>theme.responsive.mobile}){

        } */}

          {/* component e 
        background-color:${({theme})=>theme.color.bg}

        }
        {/* using props  */}
        {/* component e 
        background-color:${(props)=>props.bg}
        <Button bg='green'>submit</Button> */}




        {/* variable like use of parent child  */}

        {/* const myButton='red';
        const Button=Styled.button{
          color:${
          mycolor
        };

        }
         */}
reportWebVitals();
