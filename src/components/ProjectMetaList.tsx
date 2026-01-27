type ProjectMetaListProps = {
  title: string;
  items: string[];
};

export default function ProjectMetaList({ title, items }: ProjectMetaListProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-slate-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
