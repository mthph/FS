import {useEffect,useState} from "react";
import './styles.css';

const Users = () => {

    let [jsonData,setJsondata] = useState([]);

    useEffect (() => {
        async function fetchUsers(){
        let response = await fetch('https://reqres.in/api/users?page=2');
        let respJSON = await response.json();
        // console.log(respJSON);  
        setJsondata(respJSON.data);
        document.body.style.backgroundColor = "blue";
        
    }

    fetchUsers();
    });   
    return ( 
        <div style={{color: "white"}} display={{}}>
        <h1>Welcome to useEffect</h1>
    {
    
        jsonData.map((elem) => <h4>{elem.email} <img src={elem.avatar}></img></h4>)
    }
    </div>
    );
} 
export default Users;