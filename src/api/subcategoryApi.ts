import axiosClient from "./config/axiosConfig";

export const subcategoryApi = {
  createSubCategory: async function (body: any) {
    return await axiosClient.post("sub-categories/", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateSubCategory: async function (subCategoryId: any, body: any) {
    return await axiosClient.put(`sub-categories/${subCategoryId}`, body);
  },
  getAllSubCategory: async function () {
    return await axiosClient.get("sub-categories/all-subcategories");
  },
  getSubCategoryId: async function (subCategoryId: any) {
    return await axiosClient.get(`sub-categories/${subCategoryId}`);
  },
  deleteSubCategory: async function (subCategoryId: any) {
    return await axiosClient.delete(`sub-categories/${subCategoryId}`);
  },
  getSubCategoryList: async function () {
    return await axiosClient.get("sub-categories/subcategory-list");
  },
  featuredSubCategory: async function (subCategoryId: any) {
    return await axiosClient.post(`sub-categories/featured/${subCategoryId}`);
  },
};
