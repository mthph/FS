const {useState} = React;//use state hook

let MyCounter = () => {
    //function clickHandler(){
      //  alert('from funciton')
      let [counter,setCounter] = useState (27);//access and set, useState initial state

      let clickHandler = () => {
        counter++
        setCounter(counter);//everytime state changes,component re-renders
        console.log(counter)
      }
     
    return (
        <div>
 
            <button onClick={clickHandler}>Click Me</button>
            <p>{counter}</p>
           
        </div>
    );
}

let root = ReactDOM.createRoot(document.getElementById('mydiv'));
root.render(<MyCounter/>);