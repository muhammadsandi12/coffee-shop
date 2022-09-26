import { withIronSessionApiRoute } from "iron-session/next";
import axios from "axios";
import { sessionOptions } from "../../../lib/session";

export default withIronSessionApiRoute(verifyRoute, sessionOptions)

async function verifyRoute(req,res){
    if(req.session){
        console.log(req.session, 'ini oioi oi oi')
        const saya = req.session.data
        return res.status(200).json(saya)
        
    }
}


