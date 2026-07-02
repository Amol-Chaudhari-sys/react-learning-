let AppTime = () => {
  
 
  let time = new Date();
 
  return (
    <center>
      <p>this is the clock that shows the time in bharat at all times </p>
      <p>this is the current time  :{time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </center>
  );
}
export default AppTime;
