import axios from "axios";

const baseURL = "http://localhost:5000/user"
const sellerbaseURL = "http://localhost:5000/seller"


export async function signupUser(user) {
    try {
        let response = await axios.post(baseURL + '/signup', user)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}

export async function loginUser(user) {
    try {
        let response = await axios.post(baseURL + '/login', user)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function signupseller(seller) {
    try {
        let response = await axios.post(sellerbaseURL + '/signup', seller)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function loginseller(seller) {
    try {
        let response = await axios.post(sellerbaseURL + '/login', seller)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}


export async function sellerproduct(seller) {
    try {
        let response = await axios.post(sellerbaseURL + '/addproduct', seller)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}

export async function fetchsellerproduct(seller_id) {
    try {
        let response = await axios.get(sellerbaseURL + '/getsellerproduct/' + seller_id)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function getsingleproduct(_id) {
    try {
        let response = await axios.get(sellerbaseURL + '/getsingleproduct/' + _id)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function getdeleteproduct(_id) {
    try {
        let response = await axios.delete(sellerbaseURL + '/deletesellerproducts/' + _id)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function getupdateproduct(_id, obj) {
    try {
        let response = await axios.patch(sellerbaseURL + '/updatesellerproducts/' + _id, obj)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function getproductBycategory(category) {
    try {

        let response = await axios.get(baseURL + '/getproductcategory/' + category)
        return response.data
    } catch (error) {
        console.log(error);
        return { error: "error" }
    }
}

export async function buyproduct(obj) {
    try {
        let response = await axios.post(baseURL + '/buynowproduct', obj)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}


export async function userorders(id) {
    try {
        let response = await axios.get(baseURL + '/userorder/' + id)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function sellerorders(id) {
    try {
        let response = await axios.get(sellerbaseURL + '/sellervieworder/' + id)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function orderstatus(id) {
    try {
        let response = await axios.patch(sellerbaseURL + '/statusorder/' + id)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function cartproduct(userid, productid) {
    try {
        let response = await axios.get(baseURL + '/addtocard/' + userid + "/" + productid)
        return response.data
    }
    catch (error) {
        console.log(error);
        return { error: "error" }
    }

}
export async function viewcart(userid) {
    try {
        let response = await axios.get(baseURL + '/viewcart/' + userid)
        return response.data

    } catch (error) {
        console.log(error);
        return { error: "error" }
    }
}








