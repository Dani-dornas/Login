
import service from "../services/UsersService";
import { UsersProps } from "../types";
import { Search } from "../utils/SearchMethods";

export const useApi = () => ({
  validateUser: async (email: string) => {
    const user = await getUser(email);
    let response;

    if (user) {
      response = user.isLogged === true ? user : null;
    }

    return response;
  },

  signin: async (email: string, password: string) => {
    let user = await getUser(email);
    if (user && user.password === password) {
      const id = user.id;
      const alias = user.alias;
      const mail = user.mail;
      const password = user.password;
      const isLogged = true;
      return await service.put({ id, alias, mail, password, isLogged });
    }
    return null
  },

  logout: async (email: string) => {
    let user = await getUser(email);
    if (user) {
      const id = user.id;
      const mail = user.mail;
      const alias = user.alias;
      const password = user.password;
      const isLogged = false;
      await service.put({ id, alias, mail, password, isLogged });
    }
    
  },
});

let users: UsersProps[] = [];

async function getUsers() {
  try {
    const data = await service.get();
    users = data;
  } catch (error) {
    console.log(error);
  }
}

async function getUserPosition(email: string) {
  await getUsers();
  /* Cria lista de emails*/
  let mailList: string[] = [];

  /* Se usuários existem, popula a lista de email dos usuários */
  if (users.length > 0) {
    users?.map((user) => mailList.push(user.mail));
  }

  let s_number = new Search<number>();

  console.log(users)
  return s_number.sequential_ws(email, mailList);
}

async function registerUser(alias: string, mail: string) {
  await service.post({
    alias: alias.trim(),
    mail: mail.trim(),
    password: "",
  });
}

async function getUser(email: string) {
  let position = await getUserPosition(email);

  /* Se o email ainda não estiver no banco de dados, ele então é cadastrado */
  if (position === -1) {
    console.log("Usuário não cadastrado!");
    return null;
  }
  return users[position];
}