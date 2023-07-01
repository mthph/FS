let root = ReactDOM.createRoot(document.getElementById('mydiv'));

// function MyFuncComponent(){
// let comp = 
// <h1> Hello there!</h1>;
// return comp
// }

class MyClassComponent extends React.Component{
    constructor (props) {
        super (props);
    }
    render() {
        return <h1>{this.props.greetings}</h1>
    }
    }


//simple functional comp
let NameComp = (props) => {
    return (
    
    <h1>{props.name}</h1>
    
    )
    }

root.render([<MyClassComponent greetings='Hello '/>,
<NameComp name='Jane!'/>])
