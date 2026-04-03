export default function CollectionHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center">
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Our Collection
            </h1>
            <p className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
              Lorem ipsum dolar sit amet constreteur. Lorem ipsum dolor sit amet
              constreteur. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
