"use server";

import { databaseConnection } from "../mongoose";

export const createQuestion = async (params) => {
  try {
    await databaseConnection();
  } catch (error) {}
};
