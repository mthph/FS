import {useState} from 'react';
const ToDo = () => {

    let [tasks,setTasks] = useState([]);
    let [num,setNum] = useState(1);
    let [taskDet, setTaskDet] = useState('');

    let clickHandler = () => {
        // console.log('clicked');
        // tasks.push(taskDet);
        // console.log(tasks);
        let taskObj = {"sno":num,"details":taskDet};
        tasks.push(taskObj);
        setTasks(tasks);
        num++;
        setNum(num);
    }

    let onChangeHandler = (e) => {
        // console.log(e.target.value);
        setTaskDet(e.target.value);

    }

    let onReset = () => {
        setNum([1]);
        setTasks([]);
    }

    // let onDelete = () => {

    return ( 
        
        
        <div className="container-fluid">
            <div className="table-responsive">
            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>

                        <th scope="col">Task</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tasks.map((elem) => {
                return (
                
                    <tr key={elem.sno}>
                        <td>{elem.sno}</td>
                        <td>{elem.details}</td>
                    </tr>
               
                    )
                })
            }
             </tbody>
            </table>
        </div>
        <input type="text" onChange={onChangeHandler}/>
        <button onClick={clickHandler} className="bg-primary">Add Task</button>
        <button onClick={onReset} className="bg-primary">Reset</button>
        {/* <button onClick={onDelete} className="bg-primary">Delete Row</button> */}
        </div>
     );
}
 
export default ToDo;