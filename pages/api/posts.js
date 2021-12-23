import { getPosts } from "../../controllers/posts";


export default function handler(req,res){
    if(req.method === "GET"){
        return getPosts(req,res);
    }
}