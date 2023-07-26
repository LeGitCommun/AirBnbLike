import "../../styles/signUp/Sign.css"
const Input =(props)=>{

    return (
        <div className="componentInput">
            <label htmlFor={props.name}>{props.name}:</label>
            <input type={props.type} htmlFor={props.name} />

        </div>
    )
}


const SignUp = ()=>{
    const test = (e)=>{
        e.preventDefault()
        fetch("/api/hello")
        .then(res =>res.json())
        .then(res=> console.log(res))
    }

    const Inputs= [{
        name:"nom",
        type:"text",
        reggex:"",
    },
    {
        name:"prénom",
        type:"text",
        reggex:"",
    },
    {
        name:"mot de passe",
        type:"text",
        reggex:"",
    }]
    return( 
        <form className="formSign">
            {Inputs.map((e)=><Input key={e.name} name={e.name} type={e.type} />)}
            <button onClick={(e)=>test(e)}> Envoyer </button>
        </form>
    )
}
export default SignUp