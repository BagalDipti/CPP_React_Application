class Apis{
    api()
    {
        return fetch("http://10.136.59.31:3000/")
        .then((response)=>{
            return response.json();
        })
    }
}

export default Apis;
