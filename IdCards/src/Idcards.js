import Idcard from "./Idcard";
import completedata from "./Data.json";

const Idcards = () => {
    console.log(completedata.data);
    return (
        <div>
            {
                completedata.data.map( (elem) => {
                    return <Idcard key={elem.id} name={elem.name} state={elem.des}
                    age={elem.age}/>
                }
                ) 
            }
                
        </div>
     );
}
 
export default Idcards;


