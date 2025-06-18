import { db } from '../index';

const sampleProfiles = [
  { username: 'cristiano', followers: 632000000, category: 'Sports', avatar_url: 'https://via.placeholder.com/150' },
  { username: 'leomessi', followers: 504000000, category: 'Sports', avatar_url: 'https://via.placeholder.com/150' },
  { username: 'selenagomez', followers: 430000000, category: 'Music', avatar_url: 'https://via.placeholder.com/150' },
  { username: 'kyliejenner', followers: 400000000, category: 'Fashion', avatar_url: 'https://via.placeholder.com/150' },
  { username: 'therock', followers: 398000000, category: 'Entertainment', avatar_url: 'https://via.placeholder.com/150' },
];

export const setupDatabase = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS profiles (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      followers BIGINT DEFAULT 0,
      category VARCHAR(50),
      avatar_url TEXT
    );
  `);

  const res = await db.query('SELECT COUNT(*) FROM profiles');
  if (parseInt(res.rows[0].count, 10) > 0) return;

  console.log('Seeding database with sample data...');
  for (const p of sampleProfiles) {
    await db.query(
      'INSERT INTO profiles (username, followers, category, avatar_url) VALUES ($1, $2, $3, $4)',
      [p.username, p.followers, p.category, p.avatar_url]
    );
  }
  console.log('✅ Database seeding complete.');
};
