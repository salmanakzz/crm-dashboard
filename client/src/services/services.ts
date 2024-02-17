import axios from "../library/axios";
import { UserType } from "../utils/constants";

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
