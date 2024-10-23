import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";


import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Category from "@/components/Tables/Category";
import { categoryApi } from "@/api/categoryApi";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

async function getAllCategory(){
  const response:any = await categoryApi.getAllCategory() 
  return response.data
}

const TablesPage = async () => {

  const categories = await getAllCategory()
  const categoryList = categories.data
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Categories" />

      <div className="flex flex-col gap-10">
        
        <Category categoryList = {categoryList}  />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
