import * as fetchService from "./fetchService";

export function login(email: string, password: string): Promise<Response> {
  return fetchService.post("auth", { email: email, password: password });
}

export function logout(): void {
  fetchService.get("logout");
}
