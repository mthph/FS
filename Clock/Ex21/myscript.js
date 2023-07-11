let root = ReactDOM.createRoot(document.getElementById('mydiv'));

// function MyFuncComponent(){
// let comp = 
// <h1> Hello there!</h1>;
// return comp
// }

class MyClassComponent extends React.Component{
    render(){
        return <h1>Hello</h1>
    }
}

//simple functional comp
let MyFuncComponent = () => {
    return (
        <fragment>
    <h1>fellow traveler!</h1>
    
    </fragment>
    )
    }

root.render([<MyClassComponent/>,<MyFuncComponent/>]);