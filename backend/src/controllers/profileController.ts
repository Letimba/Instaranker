import { Request, Response } from 'express';
import { db } from '../index';

export const getProfileByUsername = async (req: Request, res: Response) => {
  const { username } = req.params;
  try {
    const { rows } = await db.query('SELECT * FROM profiles WHERE username = $1', [username]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
