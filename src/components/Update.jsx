import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function Update() {

    const {id} = useParams()
    
    const [user, setUser] = useState({
        id:id,
        name:'',
        email:'',
        image:''
      })

      useEffect(() => {
         axios.get('http://localhost:3016/users/'+id)
         .then(result => setUser(result.data))
         .catch(err => console.log(err))
      }, [])
      
  
      const navigate = useNavigate()
  
      const handleInput = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
      }
      
      const handleSubmit = (e) => {
         e.preventDefault()
         axios.put('http://localhost:3016/users/'+id, user)
         .then(result => {
          navigate('/')
          console.log(result);
         })
         .catch(err => console.log(err))
      }
  return (
    <div className='d-flex w-100 justify-content-center align-items-center'>
    <div className='w-50 border mt-5 rounded bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name :</label>
                <input type="text" name='name' className='form-control' 
                placeholder='Enter your name' onChange={handleInput} value={user.name}/>
            </div>

            <div>
                <label htmlFor="email">Email :</label>
                <input type="email" name='email' className='form-control'
                 placeholder='Enter Email' onChange={handleInput} value={user.email}/>
            </div>

            <div>
                <label htmlFor="image">Image :</label>
                <input type="text" name='image' className='form-control'
                 placeholder='Enter Image URL' value={user.image} onChange={handleInput}/>
            </div>

            <button className='btn btn-info mt-2'>Update</button>
        </form>
    </div>
</div>
  )
}

export default Update
