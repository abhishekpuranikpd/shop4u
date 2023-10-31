import ProductCard from "@/components/productcard";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    //  <ProductCard product={products[0]}/>
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            priority
            className="w-full max-w-sm rounded-lg shadow-2xl"
          />
          <div className=""><h1 className="font-bold text-3xl">
            {products[0].name}</h1>
            <p className="py-6">{products[0].description}</p>
            <Link
              href={"/products/" + products[0].id}
              className="btn btn-primary"
            >
              Check It Out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(1).map(product=>(
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
}
