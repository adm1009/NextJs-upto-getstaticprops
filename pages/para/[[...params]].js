import {useRouter} from "next/router";

const ParaDetails = () =>{
    const router= useRouter();
    const{params = []} = router.query;
    
    if(params.length === 2){
        return <h1>This is {params[0]} page with {params[1]} id</h1>
    }
    if(params.length === 1){
        return <h1>This is {params[0]} page</h1>
    }
    else{
        return <h1>This is ParaDetails Page</h1>
    }
};
export default ParaDetails;