

let isLogged=true;


export default function excercise(){
    var name='Robert Downey'
    return(
        <div className="container">
            <h1 style={{backgroundColor:'red'}}>Recat JSX</h1>
            <input type="text" />
            <p> {name}</p>
            
{
    isLogged&& <p>Welcome to Our Website</p>
}

        </div>
    )
}