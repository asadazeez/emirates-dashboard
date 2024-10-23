import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";


import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Category from "@/components/Tables/Category";
import { subcategoryApi } from "@/api/subcategoryApi";
import SubCategory from "@/components/Tables/SubCategory";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

async function getAllSubCategory(){
  const response:any = await subcategoryApi.getAllSubCategory() 
  return response.data
}

const TablesPage = async () => {

  const subcategories = await getAllSubCategory();
  const subcategoryList = subcategories.data;
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sub-Categories" />

      <div className="flex flex-col gap-10">
        <SubCategory subcategoryList={subcategoryList} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
