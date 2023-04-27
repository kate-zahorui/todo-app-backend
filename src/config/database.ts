import { DataSource } from 'typeorm';
import { Todo } from '../entities/Todo.entity';

export const AppDataSource = new DataSource({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT_DB),
  logging: ['query', 'error'],
  type: 'postgres',
  migrations: ['dist/migrations/**/*.{ts,js}'],
  subscribers: ['src/subscriber/**/*.ts'],
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  synchronize: true,
  entities: [Todo]
});

const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log('PostgreSQL Connected...');
  } catch (err: any) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
