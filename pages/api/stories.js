import { getStories } from "../../controllers/stories"

export default function handler(req, res){
    if(req.method === "GET"){
        return getStories(req,res);
    }
}