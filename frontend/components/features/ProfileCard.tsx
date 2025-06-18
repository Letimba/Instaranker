import Image from 'next/image';
import Link from 'next/link';
import { Profile } from '@/lib/api';

interface ProfileCardProps {
  profile: Profile;
  rank: number;
}

export default function ProfileCard({ profile, rank }: ProfileCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <Link href={`/profile/${profile.username}`} className="block hover:bg-gray-50 transition-colors p-4">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-gray-400 w-10 text-center">{rank}</span>
          <Image src={profile.avatar_url} alt={profile.username} width={64} height={64} className="rounded-full" />
          <div className="flex-grow">
            <p className="font-bold text-lg">@{profile.username}</p>
            <p className="text-sm text-gray-500">{profile.category}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">{new Intl.NumberFormat('en-US', { notation: 'compact' }).format(profile.followers)}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
