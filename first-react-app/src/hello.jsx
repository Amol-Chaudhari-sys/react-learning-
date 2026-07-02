function Hello (){
    let name = "Amol ";
    let num = 10 
    let fullname = () =>{
        return 'amol chaudhari';
    }
    return <h1>num is {num} hello this is dynamic , and i am {fullname()}</h1>
}
export default Hello;