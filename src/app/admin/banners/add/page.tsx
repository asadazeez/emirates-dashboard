import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BannerForm from "@/components/Form/Banner-form/Add";
import { categoryApi } from "@/api/categoryApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};
async function get(){
  const response3:any = await categoryApi.getCategoryList()
  return {response3:response3.data}
}

const FormElementsPage = async () => {
  const banners = await get()

  const category = banners.response3.data

  return (
    <DefaultLayout>
      <BannerForm category={category} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
