"use client";

import { storageUrl } from "@/utils/baseUrl";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: any;
};

const ViewPage = ({ product }: Props) => {
  return (
    <div className="relative  grid gap-9 rounded-lg bg-white p-21 pb-14 text-black dark:bg-dark dark:text-white md:grid-cols-2">
      <div className="relative h-[15rem] w-full md:h-[25rem]">
        <div className="col-span-1 flex justify-center px-5">
          <Image
            src={storageUrl + product.image}
            alt="product image"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 text-center md:text-start">
        <button>
          <Link href={`/admin/products/${product._id}`}>
            <svg
              viewBox="0 0 24 24"
              className="absolute right-13 top-13"

              fill="none"
              height={22}
              width={22}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </Link>
        </button>
        <div className="text-xl font-bold">{product.name}</div>
        <div className="text-4xl font-black">₹{product.price}</div>
        <div className="font-medium">{product.brandName}</div>
        <div className="font-medium">{product.categoryName}</div>
        <div className="font-medium">{product.description}</div>
      </div>
    </div>
  );
};

export default ViewPage;
