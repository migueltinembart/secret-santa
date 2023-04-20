import { Types } from "mongoose";

interface DUser {
  firstName: String;
  lastName: String;
  email: String;
  passwordHash: String;
  createdAt: Date;
  updatedAt: Date;
}
