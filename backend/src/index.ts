import express from 'express';
import { Pool } from 'pg';
import cron from 'node-cron';
import rankingsRouter from './routes/rankings';
import profileRouter from './routes/profile';
import blogRouter from './routes/blog';
import compareRouter from './routes/compare';
import searchRouter from './routes/search';

const app = express();
app.use(express.json());

export const db = new Pool({
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.use('/api/rankings', rankingsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/blog', blogRouter);
app.use('/api/compare', compareRouter);
app.use('/api/search', searchRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});

cron.schedule('0 2 * * *', async () => {
  console.log('Starte tägliche Profil-Stats-Aktualisierung');
  // Update logic here
});
