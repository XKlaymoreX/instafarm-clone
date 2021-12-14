import HttpResponse from "../utils/HttpResponse";


export const getStories = async (req, res) => {
    var myResponse = new HttpResponse();
    try {
        const request = await fetch('https://61b34d72af5ff70017ca1e38.mockapi.io/Stories')
        const data = await request.json();
        console.log(request)
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

