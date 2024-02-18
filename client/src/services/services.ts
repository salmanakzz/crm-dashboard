import axios from "../library/axios";
import { UserType } from "../utils/constants";

export const login = async (payload: { email: string }) => {
  try {
    const response = await axios.post("/api/user/login", payload);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addUser = async (payload: UserType) => {
  try {
    const response = await axios.post("/api/user", payload);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get("/api/user");
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getSingleUser = async (userId: string) => {
  try {
    const response = await axios.get(`/api/user/${userId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editUser = async (user: Partial<UserType>) => {
  try {
    const response = await axios.put("/api/user", user);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteUser = async (user: UserType) => {
  try {
    const response = await axios.delete(`/api/user/${user._id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const upload = async (payload: FormData, _id: string) => {
  try {
    const response = await axios.post(`/api/product/upload/${_id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
