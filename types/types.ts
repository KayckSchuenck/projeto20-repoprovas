import { users,credentials,notes,wifis,cards } from "@prisma/client";

export type CreateUsersData = Omit<users, 'id'|'createdAt'>;
export type CreateCredentialsData = Omit<credentials, 'id'|'createdAt'>;
export type CreateNotesData = Omit<notes, 'id'|'createdAt'>;
export type CreateWifiData = Omit<wifis, 'id'|'createdAt'>;
export type CreateCardData = Omit<cards, 'id'|'createdAt'>;