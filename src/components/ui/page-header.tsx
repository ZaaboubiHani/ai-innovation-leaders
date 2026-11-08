export function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="relative overflow-hidden bg-violet-950 text-white">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div className="container-x relative py-14 sm:py-20">
        <h1 className="max-w-3xl text-4xl font-semibold !text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/75">{intro}</p>
      </div>
    </div>
  );
}
