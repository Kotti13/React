import React from "react";


function Header(props,user){
    const{name}=props
    console.log(name);
   
    return (
        <header>
            <h1>Todo List</h1>
        </header>
    )
}

export default Header;