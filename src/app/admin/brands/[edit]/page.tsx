import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BrandUpdateForm from "@/components/Form/Brand-form/Edit";
import { brandApi } from "@/api/brandApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};


async function getBrandId(id:string){
  const response:any = await brandApi.getBrandId(id) 
  return response.data
 
 }

const FormElementsPage = async ({params}:{params:{edit:string}}) => {
  const brands = await getBrandId(params.edit)
  const brand = brands.data

  
  return (
    <DefaultLayout>
      
      <BrandUpdateForm BrandId={params.edit}  brand={brand} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
