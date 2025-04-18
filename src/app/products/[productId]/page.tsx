export default function ProductDetails({params}:{
     params:{ProductId:string}
}){
     return(
          <>
          <h1>Details about Products{params.ProductId}</h1>
          </>
     )
}