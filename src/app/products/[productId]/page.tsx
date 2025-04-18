export default function ProductDetails({params}:{
     params:{productId:string}
}){
     return(
          <>
          <h1>Details about Products{params.productId}</h1>
          </>
     )
}