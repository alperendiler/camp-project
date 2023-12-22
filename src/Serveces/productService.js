import axios from "axios";

export default class ProductServices{
    getProducts(){
            return axios.get("https://localhost:7044/api/products/getall").then(function(response) {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            });
    }
}