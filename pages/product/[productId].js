import {useRouter} from "next/router";
import Link from "next/link";
const ProductDetails = () =>{
    const router = useRouter();
    const productId = router.query.productId;
    return <>
    if(productId === 1){
    
    <Link href="/product/product1">
    <a>Product  {productId} details </a>
    </Link>
    }
    if(productId === 2){
       
        <Link href="/product/product2">
        <a>Product  {productId} details </a>
        </Link>
    }
    if(productId === 3){
            
            <Link href="/product/product3">
            <a>Product  {productId} details </a>
            </Link>
    }
    </>

};
export default ProductDetails;