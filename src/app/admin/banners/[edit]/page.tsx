import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { categoryApi } from "@/api/categoryApi";
import BannerUpdateForm from "@/components/Form/Banner-form/Edit";
import { bannerApi } from "@/api/bannerApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};
async function get(id:string){
  const response:any = await bannerApi.getBannerId(id)
  const response3:any = await categoryApi.getCategoryList()
  return {response3:response3.data, response:response.data}
}

const FormElementsPage = async ({params}:{params:{edit:string}}) => {
  const banners = await get(params.edit)
  const banner = banners.response.data

  const category = banners.response3.data

  return (
    <DefaultLayout>
      <BannerUpdateForm BannerId= {params.edit} banner={banner} category={category} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
