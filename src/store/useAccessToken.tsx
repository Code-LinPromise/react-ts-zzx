import {create} from "zustand"


type AccessToken={
    jwt_token:string,
    setJWT_token:(token:string)=>void
}

export const useAccessToken=create<AccessToken>((set)=>({
    jwt_token:"",
    setJWT_token:(token:string)=>set(()=>({jwt_token:token}))
}))