import { productByCategoryApi } from "@/api/productByCategoryApi";
import ECommerce from "@/app/admin/dashboard/page";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { storageUrl } from "@/utilis/baseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../../../../../../public/images/no-product-found.png";

const ProductPage = async ({ params }: { params: { category: string } }) => {
  const response = await productByCategoryApi.getProductByCategory(
    params.category,
  );
  const shopData = response.data.data.products;
  // const {categoryname, description} = response.data.data.categoryData
  const data = response.data.data.categoryData;

  return (
    <DefaultLayout>
      {shopData.length >0 ? (
        <div className="flex flex-col items-center rounded-2xl bg-white p-10 pt-20 dark:bg-dark">
          <div className="text-global-font-h5 font-bold">
            {data.categoryname} Products
          </div>
          <div className="pt-3">{data.description} </div>
          <div className="grid  w-full gap-10 p-24 md:grid-cols-4 ">
            {shopData.map((item: any, index: number) => (
              <Link key={index} href={`/admin/products/view/${item._id}`}>
                <div className=" flex flex-col items-center justify-center     ">
                  <div className="relative   size-40">
                    <Image
                      src={storageUrl + item.image}
                      alt="image"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="mb-[-1.5rem] mt-2 line-clamp-2  text-ellipsis text-center  text-base font-bold">
                    {item.name}
                  </div>
                  <div className="mt-6  text-center  text-xs font-extrabold">
                    {" "}
                    {item.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        
<h2 className="flex justify-center font-bold text-center">THERE IS NO PRODUCT IN THIS CATEGORY</h2>






        
      )}
    </DefaultLayout>
  );
};

export default ProductPage;
