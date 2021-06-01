import * as fetchService from "./fetchService";

export interface Invite {
  invite: string;
  invite_id: number;
  invite_time: string;
  sender_id: string;
  sig_id: number;
  status: "read" | "unread";
  user_id: string;
  vector: string;
}

export function getInvitations(): Promise<Invite[]> {
  const userId = localStorage.getItem("userId");
  return fetchService.get(`invites/${userId}`) as unknown as Promise<Invite[]>;
}

export function getLatestInvitations(): Promise<Invite[]> {
  const userId = localStorage.getItem("userId");
  return fetchService.get(`invites/latest/${userId}`) as unknown as Promise<
    Invite[]
  >;
}
