import HttpResponse from "../utils/HttpResponse";

export const getPosts = async (req,res) => {

    var myResponse = new HttpResponse();

    try {
        var request = await fetch("https://61b34d72af5ff70017ca1e38.mockapi.io/Posts");
        var data = await request.json();
        if(!data || typeof(data) !== "object"){
            throw {error:"Data Not Found!"};
        }
        myResponse.statusCode = request.status;
        myResponse.message = request.statusText;
        myResponse.success = request.status == 200 ? true : false;
        myResponse.data = data;
        return res.status(200).json(myResponse);
    } catch (error) {
        myResponse.statusCode = 500;
        myResponse.message = error;
        myResponse.success = false;
        myResponse.data = null;
        return res.status(500).json(myResponse);
    }

 }