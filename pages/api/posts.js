


export  async function getPosts(req,res){
    try {
        const result = await fetch('https://61b34d72af5ff70017ca1e38.mockapi.io/Stories')
        const data = await result.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({failed:true})
    }
}