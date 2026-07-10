import Image from 'next/image'

const storyImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC8h2jujLKjdqOz2ckIcE-tICPLyDT07W7PNNiAnl1l1Cqqt2o-DE-nVVPRRB7Kr7swZDCsMlJC4QWSJjkhIa-rrmvX6sey5CrFzkAC8Y-9v86rIiq8GwiB_GgNPgGuPfwTHm0FagTdG3fGUdAkFrAzPnrywNQs7G4yYxs22R0kUttaZ-EWRN4gudIbmuplNlld9zX-_3cENi7mO8fIHNmKmLdVLgFpqLvp3JOrOZHajx1gk_3UqxgD_w'

export default function OurStory() {
  return (
    <section id="story" className="w-full bg-cream-base py-20 md:py-[120px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src={storyImage}
            alt="Our cozy coffee shop interior"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
            Our Story
          </span>
          <h2 className="font-serif text-3xl leading-tight text-espresso-ink md:text-4xl">
            A Passion for Perfect Coffee
          </h2>
          <p className="text-base leading-relaxed text-on-surface-variant">
            Founded in 2010, Coffeestop began as a small dream in a quiet corner
            of the city. What started as a single espresso machine and a love
            for quality beans has grown into a community hub where stories are
            shared over perfectly brewed cups.
          </p>
          <p className="text-base leading-relaxed text-on-surface-variant">
            We source our beans directly from sustainable farms in Ethiopia,
            Colombia, and Guatemala. Every roast is crafted to honor the unique
            character of each origin.
          </p>
          <blockquote className="relative border-l-2 border-oak-accent pl-6">
            <p className="font-serif text-lg italic leading-relaxed text-espresso-ink">
              &ldquo;Coffeestop isn&apos;t just a café — it&apos;s a place
              where the community gathers, ideas brew, and friendships grow over
              exceptional coffee.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-medium text-on-surface-variant">
              — Mira Sharma, Founder
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
