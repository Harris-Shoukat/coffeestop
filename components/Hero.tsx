import Image from 'next/image'

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDeWTyFD6kk1ZKY5uLmsLFK8Apa99vlc49uVDpRonYGdHOU9dPrwco30EKI5GmxhquQHrNrSZOFC5KgIoINdQ9PKaoe89o2qYBLzAPtlH7i6RDOUkC44hmsiYvSInE0CSs87rpkNkVygwxojVvE3F6fNI052ZndcWMZexOh6leqW2UgvqrAhf2sH-_uuXA9WRClliE6IVck4x5l9bQWk47k1Qt2r6-8MA_oYIjtj4KnlOASQOxpEUTzpA'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-cream-base"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
        <div className="flex flex-col gap-6">
          <span className="inline-block w-fit rounded-full bg-oak-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-oak-accent">
            Welcome to Coffeestop
          </span>
          <h1 className="font-serif text-4xl leading-tight tracking-tight text-espresso-ink md:text-6xl">
            Where Every Sip
            <br />
            Tells a Story
          </h1>
          <p className="max-w-md text-base leading-relaxed text-on-surface-variant md:text-lg">
            Crafting exceptional coffee experiences with passion and precision.
            From bean to cup, every detail matters.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-espresso-ink px-8 py-3 text-sm font-medium text-cream-base transition-colors hover:bg-oak-accent"
            >
              Explore Menu
            </a>
            <a
              href="#story"
              className="rounded-full border border-espresso-ink/20 px-8 py-3 text-sm font-medium text-espresso-ink transition-colors hover:bg-espresso-ink hover:text-cream-base"
            >
              Our Story
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-[4/5]">
          <Image
            src={heroImage}
            alt="Coffee shop interior with barista preparing coffee"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            preload
          />
        </div>
      </div>
    </section>
  )
}
