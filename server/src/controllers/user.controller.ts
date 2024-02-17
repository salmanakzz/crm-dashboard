import { Request, Response } from "express";
import UserModel, { UserAttributes } from "../config/models/user.model";

export const addUser = async (
  { body }: { body: UserAttributes },
  res: Response
) => {
  try {
    const createdUser = await UserModel.create(body);
    return res.status(200).json({ status: true, _id: createdUser._id });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getUser = async (_: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ status: true, data: users });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const editUser = async (req: Request, res: Response) => {
  const { _id, ...rest } = req.body as UserAttributes;
  try {
    const users = await UserModel.updateOne({ _id }, { $set: rest });
    res.status(200).json({ status: true, data: users });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const deleteUser = async ({ params }: Request, res: Response) => {
  try {
    await UserModel.deleteOne({ _id: params._id });
    res.status(200).json({ status: true });
  } catch (error) {
    console.error(error);
    return error;
  }
};
