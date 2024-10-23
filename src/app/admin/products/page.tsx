import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Product from "@/components/Tables/Product";
import { productApi } from "@/api/productApi";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};


async function getAllProduct(){
  const response:any = await productApi.getAllProduct() 

  return response.data
 }


const TablesPage = async() => {
  
  const products = await getAllProduct()
  const productList = products.data
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Products" />

      <div className="flex flex-col gap-10">
        
        <Product productList ={productList}  />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
