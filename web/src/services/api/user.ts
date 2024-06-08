import { User as UserType } from "@/types/User";

export default class User {
  private static BASE_API = process.env.INITIAL_PATH_URL_API;

  static List = async (token: string) => {
    return fetch(`${this.BASE_API}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  };

  static Create(data: UserType.Create) {
    return fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  static Update = async (token: string, data: UserType.Edit) => {
    return fetch(`${this.BASE_API}/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  static Delete = async (token: string, id: string) => {
    return fetch(`${this.BASE_API}/user?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  };
}
