import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./pricetag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isnew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={"/products/" + product.id}
      className="bg-base card w-full transition-shadow hover:shadow-xl"
    >
      <div className="card-body">
        <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={400}
            className="h-48 bg-cover"
          />
        </figure>
        <h1 className="card-title">{product.name} </h1>{" "}
        {isnew && <div className="badge badge-primary">NEW</div>}
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
