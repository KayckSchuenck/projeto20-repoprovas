import { Test, User } from "@prisma/client";

export type CreateUsersData = Omit<User, 'id'|'createdAt'>;
export type CreateTestsData = Omit<Test, 'id'|'createdAt'>;
