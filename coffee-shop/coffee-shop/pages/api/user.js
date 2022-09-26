import { withIronSessionApiRoute } from "iron-session/next/dist";
import { SessionOptions } from "../../lib/session";
import { NextApiRequest, NextApiResponse } from "next";

const User = {
    isLoggedIn: boolean,
    login: string,
    avatarUrl: string
 }
