import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-gray-800">InstaRanker</Link>
      </nav>
    </header>
  );
}
