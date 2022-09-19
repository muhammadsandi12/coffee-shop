import {withIronSessionApiRoute} from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import axios from 'axios'



export default withIronSessionApiRoute(async (req,res) =>{
 const {email, password} = req.body
 try{
    const response = await axios.post(`http://localhost:1111/api/v1/auth/login`, {email,password});
    if(response){
        req.session.data = response.data
        await req.session.save();
        return res.status(200).json(response.data)
    }
 }catch(err){
    return res.status(400).json(err.response.data)
 }
},sessionOptions)