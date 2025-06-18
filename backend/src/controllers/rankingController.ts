import { Request, Response } from 'express';
import { db } from '../index';

export const getRankingsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  try {
    const query = 'SELECT * FROM profiles ORDER BY followers DESC LIMIT 50';
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
