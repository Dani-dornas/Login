import { User } from "../types/User";
import api from "./api";

class UsersService {
  async get(): Promise<User[]> {
    const { data } = await api.get("/user");
    return data;
  }

  async post(props: {
    name: string;
    mail: string;
    password: string;
    isLogged: boolean;
  }): Promise<any> {
    const { data } = await api.post("/user", props);
    return data;
  }

  async put(props: {
    id: string;
    name: string;
    mail: string;
    password: string;
    isLogged: boolean;
  }): Promise<any> {
    const { data } = await api.put("/user", props);
    return data;
  }

  async listById(id: string) {
    const { data } = await api.get(`/user/${id}`);
    return data;
  }
}

const service = new UsersService();
export default service;