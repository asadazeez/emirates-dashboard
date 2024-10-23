import axiosClient from "./config/axiosConfig";

export const categoryApi = {
  createCategory: async function (body: any) {
    return await axiosClient.post("categories/", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateCategory: async function (categoryId: any, body: any) {
    return await axiosClient.put(`categories/${categoryId}`, body);
  },
  getAllCategory: async function () {
    return await axiosClient.get("categories/all-categories");
  },
  getCategoryId: async function (categoryId: any) {
    return await axiosClient.get(`categories/${categoryId}`);
  },
  deleteCategory: async function (categoryId: any) {
    return await axiosClient.delete(`categories/${categoryId}`);
  },
  getCategoryList: async function () {
    return await axiosClient.get("categories/category-list");
  },
};
