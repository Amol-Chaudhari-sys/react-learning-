function Randomno(){
    let num = Math.random()*100;
    return <p style={{'backgroundColor':"#c1eb50", 'height':'30px' ,'textAlign':'center'}}>random no is {Math.round(num)}</p>
}
export default Randomno;