import {withIronSessionApiRoute} from 'iron-session/next'
import { sessionOptions } from '../../../lib/session'
import axios from 'axios'


export default withIronSessionApiRoute(async (req,res) =>{

 const {email, password} = req.body
 try{
    const dataLogin = await axios.post(`http://localhost:1111/api/v1/auth/login`, {email,password});
    const users = {data: dataLogin.data, isLoggedIn: true}
    if(dataLogin){
        req.session.data = users
        await req.session.save();
        return res.status(200).json(users)
    }
 }catch(err){
    return res.status(400).json(err.dataLogin.data)
 }
},sessionOptions)