import axiosClient from "./config/axiosConfig";

export const brandApi = {
  createBrand: async function (body: any) {
    return await axiosClient.post("brands", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateBrand: async function (brandId: any, body: any) {
    return await axiosClient.put(`brands/${brandId}`, body);
  },
  getAllBrand: async function () {
    return await axiosClient.get("brands/all-brands");
  },
  getBrandId: async function (brandId: any) {
    return await axiosClient.get(`brands/${brandId}`);
  },
  deleteBrand: async function (brandId: any) {
    return await axiosClient.delete(`brands/${brandId}`);
  },
  getBrandList: async function () {
    return await axiosClient.get("brands/brand-list");
  },
};
