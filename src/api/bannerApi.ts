import axiosClient from "./config/axiosConfig";

export const bannerApi = {
  createBanner: async function (body: any) {
    return await axiosClient.post("/banners/", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateBanner: async function (bannerId: any, body: any) {
    return await axiosClient.put(`/banners/${bannerId}`, body);
  },
  getAllBanner: async function () {
    return await axiosClient.get("/banners/all-banners");
  },
  getBannerId: async function (bannerId: any) {
    return await axiosClient.get(`/banners/${bannerId}`);
  },
  deleteBanner: async function (bannerId: any) {
    return await axiosClient.delete(`/banners/${bannerId}`);
  },
};
