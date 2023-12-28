const https = (...args) => {
     return new Promise ((resolve , reject) => {
        fetch (...args) 
        .then ((response) => {
            if(!response.ok){
                reject(response.json())
            }else {
                resolve(response.json())
            }
        })
        .catch ((error)=> {
            reject(error);
        })
     }) 
};

export default https;