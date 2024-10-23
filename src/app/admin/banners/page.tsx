import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";


import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Category from "@/components/Tables/Category";
import { categoryApi } from "@/api/categoryApi";
import Banner from "@/components/Tables/Banner";
import { bannerApi } from "@/api/bannerApi";

export const metadata: Metadata = {
  title: "E-Shop Tables Page | NextAdmin - E-Shop Dashboard Kit",
  description: "This is E-Shop Tables page for NextAdmin Dashboard Kit",
};

async function getAllBanner(){
  const response:any = await bannerApi.getAllBanner()
  return response.data
}



const TablesPage = async () => {
  const banners = await getAllBanner()
  const bannerList = banners.data

  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Banners" />

      <div className="flex flex-col gap-10">
        <Banner bannerList ={bannerList} />
       
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
