// app/products/[productId]/page.tsx

type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  return (
    <div>
      <h1>Details about Product {params.productId}</h1>
    </div>
  );
}
