import React from "react";

let user={id:1,compo:"class"};
const{id,compo}=user;
console.log(id)

class Footer extends React.Component{

render(){
    console.log(this.props);
    return(
        <footer>
            <h2>Footer</h2>
        </footer>
    )
}
 
}

export default Footer;
// class is create object template extense 
// class is object creating template
// object inside function called method