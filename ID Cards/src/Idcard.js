const Idcard = (props) => {
    return (
        <div>
            <div className="card w-25 bg-info text-white float-start mx-4 my-4">
                <div className="card-header bg-primary"> <h2> Name: {props.name} </h2></div>
                <div className="card-body">
                    <h4 className="card-title"> State: {props.state} </h4>
                    <p className="card-text"> Age: {props.age}</p>
                </div>
                <div className="card-footer bg-primary">
                   <button className="btn btn-info"> More.... </button>
                </div>
            </div>
        </div>
     );
    }

 
export default Idcard;