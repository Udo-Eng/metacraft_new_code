// import axios from "axios";

// Declare API Request Handlers for each request to the backend server


export async function signInUser(userData){
     
     const response = await axios.post("https://metacraft.com/auth/",userData);

     if(response.ok === true){
        return  response.data;
     }
     else{
        throw new Error("User not authenticated")
     }

}


