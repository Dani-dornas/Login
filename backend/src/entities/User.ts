import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 15, unique: true })
  alias: string;

  @Column({ nullable: false, length: 50, unique: true })
  mail: string;

  @Column({ nullable: false, length: 20, unique: false })
  password: string;

  @Column({ nullable: false, default: false })
  isLogged: boolean;
}