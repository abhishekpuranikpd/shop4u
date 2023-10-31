import PriceTag from "@/components/pricetag";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Metadata } from "next";

interface ProductPageProps {
  params: {
    id: string;
  };
}
const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + "Shop4U",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}
export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
 const product = await getProduct(id)
  return (
    <div className="flex flex-col gap-4 rounded-md bg-slate-50 p-5 lg:flex-row">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={800}
        height={400}
      />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="py-6">{product.description}</p>
        <PriceTag price={product.price} />{" "}
      </div>
    </div>
  );
}
