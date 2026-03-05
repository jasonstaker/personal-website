import { mailto, site } from "../content/site";

export default function Contact() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-neutral-600 mt-2">
          Fastest way to reach me: email or LinkedIn.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <a className="px-4 py-2 rounded-md border w-fit" href={mailto}>
          Email
        </a>

        <a className="underline w-fit" href={site.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a className="underline w-fit" href={site.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <div className="text-sm text-neutral-500">
        {site.location ? site.location : null}
      </div>
    </div>
  );
}