export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-600 flex justify-between">
        <span>© {new Date().getFullYear()}</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  );
}
