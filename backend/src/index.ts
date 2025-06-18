import express from 'express';
import { Pool } from 'pg';
import cron from 'node-cron';
import cors from 'cors';
import rankingsRouter from './routes/rankings';
import profileRouter from './routes/profile';
import { runScheduledUpdate } from './cron/updateStats';
import { setupDatabase } from './services/dataSeeder';

const app = express();
app.use(cors());
app.use(express.json());

export const db = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.use('/api/rankings', rankingsRouter);
app.use('/api/profiles', profileRouter);

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await db.connect();
    console.log('✅ Database connection successful.');
    await setupDatabase();
    app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
    cron.schedule('0 2 * * *', runScheduledUpdate);
  } catch (error) {
    console.error('❌ Failed to start backend:', error);
    process.exit(1);
  }
};

startServer();
