import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CategoryUpdateForm from "@/components/Form/Category-form/Edit";
import { categoryApi } from "@/api/categoryApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};
async function getCategoryId(id:string){
  const response:any= await categoryApi.getCategoryId(id)
  return response.data
}

const FormElementsPage = async ({params}:{params:{edit:string}}) => {

  const categories = await getCategoryId(params.edit)
  const category = categories.data
  return (
    <DefaultLayout>
      <CategoryUpdateForm CategoryId ={params.edit} category={category} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
