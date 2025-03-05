export default function Home(){
    const mail=localStorage.getItem('Email');
const pass=localStorage.getItem('Password');
console.log(`mail(${mail}) pass(${pass})`)
    return(
        <div><h1>Welcome to HomePage</h1></div>
    )
}

