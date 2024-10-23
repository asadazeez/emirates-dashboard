import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { productApi } from "@/api/productApi";
import ViewPage from "@/components/Form/Product-form/View";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getProductId(id:string){
  const response:any = await  productApi.getProductId(id)
  return {response:response.data}
}

const FormElementsPage =async ({params}:{params:{view:string}}) => {
  const products = await getProductId(params.view)
  const product = products.response.data
  
  return (
    <DefaultLayout>
      <ViewPage  product={product}  />
    </DefaultLayout>
  );
};

export default FormElementsPage;
