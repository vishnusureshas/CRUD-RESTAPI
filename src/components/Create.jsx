import axios from 'axios'
import React,{useState} from 'react'
import {v4 as uuid }from 'uuid'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [user, setUser] = useState({
      id:uuid(),
      name:'',
      email:'',
      image:''
    })

    const navigate = useNavigate()

    const handleInput = (e) => {
      setUser({...user,[e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
       e.preventDefault()
       axios.post('http://localhost:3016/users',user)
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
                    <input type="text" name='name' className='form-control' placeholder='Enter your name' onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter Email' onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="image">Image :</label>
                    <input type="text" name='image' className='form-control' placeholder='Enter Image URL' onChange={handleInput}/>
                </div>

                <button className='btn btn-info mt-2'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create