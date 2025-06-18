import { getRankings } from '@/lib/api';
import ProfileCard from '@/components/features/ProfileCard';

export default async function HomePage() {
  const profiles = await getRankings('general');
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">Top Instagram Profiles</h1>
      <p className="text-lg text-gray-600 mb-8">Global ranking based on followers.</p>
      <div className="space-y-4">
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.id} profile={profile} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
