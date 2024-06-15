import React, { useEffect, useState } from 'react'
// import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const List = ({title}) => {
    const [items,setItems ] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4001/api/category")
        .then((res) => res.json())
        .then((data) =>setItems(data.reverse()))
        .catch((error)=> console.log(error));
},[]);


const deleteData=(id)=> { 
 
        // fetch(`http://localhost:4001/api/category${id}`)
        // .then((res) => res.json())
        // .then.((delete) => deleteItem(data.delete()))
        // .catch((error)=> console.log(error));
    }



  return (
    <div>
            <Link to="/admin/category/add">Add</Link>
            <table border={1} align='center' cellPadding={10} cellSpacing={0}>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Photo</th>
                <th>Delete</th>
            </tr>
            <tbody>
            {items.map((item) => (
                <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                        <img alt=""  src={item.thumbnail} height="100"/>
                    </td>
                    <td><button onClick={deleteData(item._id)}>Delete</button> </td>

                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default List