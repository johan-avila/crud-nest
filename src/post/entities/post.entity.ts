/* Esto es como crear las tablas  en MySQL*/
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar", {length: 250})
    title: string;
    @Column("varchar", {length: 250})
    category: string;
    @Column("simple-array")
    tags: string[];
    @Column()
    status: boolean;    
} 