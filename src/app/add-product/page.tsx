import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { error } from "console";
import { redirect } from "next/navigation";

export const metadata = {
  title : "Add-Product- Shop4U"
}

async function addproduct( formdata : FormData ) {
  "use server";
 const name = formdata.get("name")?.toString();
 const description = formdata.get("description")?.toString();
 const imageUrl = formdata.get("imageUrl")?.toString();
 const price = Number(formdata.get("price") || 0)
 if(!name || !description || !imageUrl || !price){
  throw error("missing fields")
 }

  await prisma.product.create({
    data :{name, description, imageUrl, price},
  });
  redirect("/")
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addproduct}>
        <input
          required
          name="name"
          placeholder="name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image Url"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <FormSubmitButton className="btn btn-primary btn-block" type="submit">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
