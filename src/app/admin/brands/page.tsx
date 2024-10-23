import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Brand from "@/components/Tables/Brand";
import { brandApi } from "@/api/brandApi";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};


async function getAllBrands(){
  const response:any = await brandApi.getAllBrand() 
  return response.data
 }

const TablesPage = async () => {
  const brands = await getAllBrands()
  const brandList = brands.data.brands
   return (
    <DefaultLayout>
      <Breadcrumb pageName="Brands" />

      <div className="flex flex-col gap-10">
        
        <Brand brandList ={brandList } />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
