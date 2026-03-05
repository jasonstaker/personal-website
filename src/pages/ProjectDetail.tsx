import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { slug } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-semibold">Project: {slug}</h1>
      <p className="text-neutral-600 mt-2">Case-study sections go here.</p>
    </div>
  );
}