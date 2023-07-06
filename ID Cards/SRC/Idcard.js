const Idcard = (props) => {
    return (
        <div>
            <div class="card w-25 bg-info text-white float-start mx-4 my-4">
                <div class="card-header bg-primary"> <h2> Name: {props.name} </h2></div>
                <div class="card-body">
                    <h4 class="card-title"> State: {props.state} </h4>
                    <p class="card-text"> Age: {props.age}</p>
                </div>
                <div class="card-footer bg-primary">
                   <button class="btn btn-info"> More.... </button>
                </div>
            </div>
        </div>
     );
    }

 
export default Idcard;
