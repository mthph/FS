let root = ReactDOM.createRoot(document.getElementById('myreactdiv'));

class MyClassComponent extends React.Component{
    render(){
        return <h1>Hello</h1>
    }
}

root.render(<MyClassComponent/>);