export const inputdata=(email,password)=>{
   
    const validEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email) ;
    const validPass= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password) ;

    if(!validEmail)
    return "Email ID is not Valid" ;
    
    if(!validPass)
    return "Password is not valid" ;

    return null ;
}