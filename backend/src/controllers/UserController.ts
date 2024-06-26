import AppDataSource from "../data-source";
import { Request, Response } from "express";
import { User } from "../entities/User";

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { alias, mail, password } = req.body;
    const user = await AppDataSource.manager
      .save(User, { alias, mail, password })
      .catch((e) => {
        // testa se o alias é repetido
        if (/(alias)[\s\S]+(already exists)/.test(e.detail)) {
          return { error: "Codinome já existe", props: "alias" };
        }
        // testa se o e-mail é repetido
        else if (/(mail)[\s\S]+(already exists)/.test(e.detail)) {
          return { error: "E-mail já existe", props: "mail" };
        }
        // // testa se o e-mail é repetido
        // else if (/(password)[\s\S]+(already exists)/.test(e.detail)) {
        //   return { error: "Telefone já existe", props: "password" };
        // }
        return { error: e.message, props: "" };
      });
    return res.json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, alias, mail, password, isLogged } = req.body;
    //obtém o usuário na tabela users
    const user = await AppDataSource.manager.findOneBy(User, { id });
    if (!user) {
      //verifica se o usuário existe
      return res.json({ error: "Usuário inexistente", props: "user" });
    }
    user.alias = alias;
    user.mail = mail;
    user.password = password;
    user.isLogged = isLogged;
    const r = await AppDataSource.manager.save(User, user).catch((e) => {
      // testa se o alias é repetido
      if (/(alias)[\s\S]+(already exists)/.test(e.detail)) {
        return { error: "Codinome já existe", props: "alias" };
      }
      // testa se o e-mail é repetido
      else if (/(mail)[\s\S]+(already exists)/.test(e.detail)) {
        return { error: "E-mail já existe", props: "mail" };
      }
      // // testa se telefone é repetido
      // else if (/(password)[\s\S]+(already exists)/.test(e.detail)) {
      //   return { error: "Telefone já existe", props: "password" };
      // }
      return { error: e.message, props: "" };
    });
    return res.json(r);
  }

  public async list(_: Request, res: Response): Promise<Response> {
    const users = await AppDataSource.manager.find(User, {
      order: {
        alias: "ASC",
      },
    });
    return res.json(users);
  }

  public async listById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    console.log("id", id);
    const user = await AppDataSource.manager.findOne(User, {
      where: { id: parseInt(id) },
    });
    return res.json(user);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    // o método delete retorna o objeto {"raw": [],"affected": 1}
    // a propriedade affected terá valor 0 se não tiver sido excluído o registro
    const { affected } = await AppDataSource.manager.delete(User, { id });
    return res.json({ affected });
  }
}

export default new UserController();
