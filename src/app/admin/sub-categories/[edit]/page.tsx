import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CategoryUpdateForm from "@/components/Form/Category-form/Edit";
import { categoryApi } from "@/api/categoryApi";
import { subcategoryApi } from "@/api/subcategoryApi";
import SubCategoryUpdateForm from "@/components/Form/SubCategory-form/Edit";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};
async function getSubCategoryId(id:string){
  const response:any= await subcategoryApi.getSubCategoryId(id)
  return response.data
}

const FormElementsPage = async ({params}:{params:{edit:string}}) => {

  const subcategories = await getSubCategoryId(params.edit);
  const subcategory = subcategories.data
  return (
    <DefaultLayout>
      <SubCategoryUpdateForm
        SubCategoryId={params.edit}
        subcategory={subcategory}
      />
    </DefaultLayout>
  );
};

export default FormElementsPage;
