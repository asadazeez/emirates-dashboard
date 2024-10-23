import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProductForm from "@/components/Form/Product-form/Add";
import { brandApi } from "@/api/brandApi";
import { categoryApi } from "@/api/categoryApi";
import { subcategoryApi } from "@/api/subcategoryApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function get(){
  const response2:any = await  brandApi.getBrandList()
  const response3: any = await categoryApi.getCategoryList()
  const response4:any = await subcategoryApi.getSubCategoryList()
  return {response2:response2.data,response3:response3.data,response4:response4.data}
}



const FormElementsPage = async () => {

  const products = await get()
  const brands = products.response2.data
  const category = products.response3.data
  const subcategory = products.response4.data
  return (
    <DefaultLayout>
      <ProductForm
        brands={brands}
        category={category}
        subcategory={subcategory}
      />
    </DefaultLayout>
  );
};

export default FormElementsPage;
