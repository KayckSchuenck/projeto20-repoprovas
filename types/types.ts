import { Test, User } from "@prisma/client";

export type CreateUsersData = Omit<User, 'id'|'createdAt'>;
export type CreateTestsData = Omit<Test, 'id'|'createdAt'>;
// export type CreateNotesData = Omit<notes, 'id'|'createdAt'>;
// export type CreateWifiData = Omit<wifis, 'id'|'createdAt'>;
// export type CreateCardData = Omit<cards, 'id'|'createdAt'>;