import axiosClient from "./config/axiosConfig";

export const productApi = {
  createProduct: async function (body: any) {
    return await axiosClient.post("/products/", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateProduct: async function (productId: any, body: any) {
    return await axiosClient.put(`/products/${productId}`, body);
  },
  getProductId: async function (productId: any) {
    return await axiosClient.get(`/products/${productId}`);
  },
  getAllProduct: async function () {
    return await axiosClient.get("/products/all-products");
  },
  deleteProduct: async function (productId: any) {
    return await axiosClient.delete(`/products/${productId}`);
  },
  offerProduct: async function (productId: any) {
    return await axiosClient.post(`/products/offer-product/${productId}`);
  },
};
