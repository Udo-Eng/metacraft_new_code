// import axios from "axios";
// RESTFUL API 
export async function signInUser(userData){
     
     const response = await axios.post("https://metacraft.com/auth/",userData);

     if(response.ok === true){
        return  response.data;
     }
     else{
        throw new Error("User not authenticated")
     }

}


