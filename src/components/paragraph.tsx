const heading = "Lorem ipsum dolor sit amet conse.";

const sampleParagraph = `Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet
          constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit
          amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum
          dolar sit amet constreteurLorem ipsum dolar sit amet constreteurLorem
          ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet
          constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar
          sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum
          dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem
          ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur
          Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet
          constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar
          sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum
          dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur
          Lorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet
          constreteurLorem ipsum dolar sit amet constreteur dolar sit amet
          constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit
          amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum
          dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem
          ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur`;

export default function Paragraph({
  title = heading,
  para = sampleParagraph,
}: {
  title?: string;
  para?: string;
}) {
  return (
    <section className="mx-auto my-14 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-slate-50 p-6 shadow-sm sm:p-10">
        <h3 className="mb-5 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-slate-700 md:text-lg">
          {para}
        </p>
      </div>
    </section>
  );
}
