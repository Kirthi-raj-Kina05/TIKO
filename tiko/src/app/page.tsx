export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-amber-50 p-6 text-center">
      <h1 className="text-5xl font-bold text-teal-700">TIKO</h1>
      <p className="text-lg text-gray-700">
        Log. Watch the ring fill. Claim your treat.
      </p>
      <button className="rounded-full bg-teal-600 px-6 py-3 text-white">
        Try without signing up
      </button>
    </main>
  );
}