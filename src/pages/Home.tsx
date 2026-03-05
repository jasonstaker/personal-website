export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Software / CS portfolio</h1>
      <p className="text-neutral-600">
        Fast, recruiter-friendly proof of engineering ability.
      </p>
      <div className="flex gap-3">
        <a className="px-4 py-2 rounded-md border" href="/projects">View Projects</a>
        <a className="px-4 py-2 rounded-md border" href="/resume">Resume</a>
        <a className="px-4 py-2 rounded-md border" href="/contact">Contact</a>
      </div>
    </div>
  );
}