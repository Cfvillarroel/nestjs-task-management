import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;

    @ManyToOne(type => User, user => user.tasks, { eager: false })
    user: User;
    // Many defines the relationship, but you need to define the column too.
    @Column()
    userId: number;
}
