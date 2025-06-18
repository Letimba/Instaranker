export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} InstaRanker. All rights reserved.
      </div>
    </footer>
  );
}
