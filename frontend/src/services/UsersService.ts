import { UsersProps } from "../types";
import api from "./api";

class UsersService {
  async get(): Promise<UsersProps[]> {
    const { data } = await api.get("/user");
    return data;
  }

  async post(props: {
    alias: string;
    mail: string;
    password: string;
  }): Promise<any> {
    const { data } = await api.post("/user", props);
    return data;
  }

  async put(props: {
    id: number;
    alias: string;
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

  // async signin(props: {
  //   mail: string;
  //   password: string;
  // }): Promise<any> {
  //   const { data } = await api.put("/user/signin", props);
  //   return data;
  // }
}

const service = new UsersService();
export default service;