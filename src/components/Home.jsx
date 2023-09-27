import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

function Home() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      axios.get('http://localhost:3016/users')
      .then((result) => setUsers(result.data))
      .catch((err)=>console.log(err))
    }, [])

    const handleDelete = (id) => {
       const confirm = window.confirm("Do you want to delete ?")
       if(confirm) {
        axios.delete('http://localhost:3016/users/'+id)
        .then((result) => {
          alert("Data deleted successfully")
          navigate("/")
        })
        .catch((err) => {
          console.log(err);
        })
       }
    }
    
  return (
    <div className='justify-content-center  d-flex align-items-center mt-5'>
     <div className='w-75'>
      <Link to="/create" className='btn btn-primary btn-sm mb-2'>Create +</Link>
      <table className='table text-center'>
          <thead className='table-success'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><img src={user.image} alt={user.name} width={60} height={50} className='rounded-circle'/></td>
                        <td>
                          <Link to={`/update/${user.id}`}>
                            <button className='btn btn-success me-2 btn-sm'>Update</button>
                          </Link>  
                            <button onClick={() => handleDelete(user.id)} className='btn btn-danger btn-sm'>Delete</button>
                        </td>
                    </tr>
                ))
            }
          </tbody>
      </table>
     </div>
    </div>
  )
}

export default Home
