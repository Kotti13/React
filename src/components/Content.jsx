import React from 'react';
import styled from 'styled-components';

export const Content = () => {
    let headindstyle={
        backgroundColor:'red',
        color:'white',
        boxShadow:'8px 5px 3px black'
    }

    let Button=styled.button `
     background-color:blue;
     color:white;
     width:100px;
     height:50px
    `;

    let NewButton=styled(Button )
    `
    background-color:red;
    box-shadow:10px 10px 10px black;
    `

  return (
    <main>
      <h1 style={headindstyle}>Main Content</h1>
      <Button>Click Me!</Button>
      <NewButton>Click</NewButton>
    </main>
  )
}

// export default Content






