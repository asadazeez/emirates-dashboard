import axiosClient from "./config/axiosConfig";

export const productByCategoryApi = {
  getProductByCategory: async function (categoryId: string) {
    return await axiosClient.get(`/categories/products/${categoryId}`);
  },
};
