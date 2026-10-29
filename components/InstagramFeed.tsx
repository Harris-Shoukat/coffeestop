import Image from 'next/image'

const images = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD3S2SUWEywg0DweUqMjs4MgO0dd1CSRO41zzuShnxDoh6paNAhS_kdB-LK6aD-320WCl2ncSHvrHnlgOVyjTtP5uecingh5yCs9Csu_lnyQDvyNs3PYXnURkiuixqLpuRFEhJNujc65gkpLjcS3UFgfA6CMke5Xboy8Jb1kNOj87ywkPwZfFiEB8uLCgFjc8LS45yy2Q5pGuArCU5faoIVGMhYA-AFvQJhurIPtQZewZcW7Qez8gBziw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDsM18yYK5jdWWfI7Hxhi0hEdLt3daGJ8Hi6NTKu3QrRpUPath6_knQN7v9vk-1DeAfeT0YLE8_6JsBFAdjWI5thNFjj5qeDoXIGx4R2KGWQZbJ-35zb75VqWMSROmbq7d531EhCTvh6r3H9n9w9TBbWiQbflvY-r2foJID-cA1xfuGK63SLJSFzoPG6IqJkSxB78qFaBuCF6-GhK9etPkdz7iBKO3SCREOBJq_mpA_dXRVXvI-JVVlRw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCHtJRnhf2MUVedskQ1FROJIqPsaNWQ3D9hiBjrhXoljSs7A9MDOLdRnQj04hUG6N2XXPFt5q2gAWPlP2tcepOMpT45HoJ-rfDBqukMCO2DLrzDNdxuYs5xTbjS0x9V4NDJNhQHOr1hIAlUOzAIXl099wWj0b2B_dQytZ_filPFS97GVb-WgPQ78FrFOAkc0HlSS-uLt_JI81aP0j5y3Wi7cSQGoMyC7O97moUd9ED8Vh-axz0r-Sjqbw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCu2NL3aWiEOekjLWAFiWHHnIL8Jr5XtkbneDRqg2YpF1Viy3fBAl3yC8ISdkA-UM-0u4Mot1eCUc_Kxhvach4soSi1tWtzeQCzaWPU-30zJnTdxatQZPlJpTepePt3Pq7SS7_jzLaDxxVbyX0SWDdBp_qMxP1AYtc9XkMR7lEbE32EzD6aSDsd9TLSRsJQHBWDyvhy3kBrt1nI1k8Sy-_thuV_aaXg81DRYWzuOxlGK53vHIzQr3mUIw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCNsN6tSw5W4UzndbN9IhoH4Fn3HS-tb5NZRlAjgjOc_RM_jAvXlCmz2a8goYWMjeB3zJwAruz7dl6z-LYWBVQN7sIEAXZ-kY4ILXRboNe2YI78av02fvsVFsh44FwEwEPkEok4pXVLppaE2yfC9cSHPxtwBRWT8s3Yj4-cfNSvZec7JOv2s_G8hKen3cke1Cwosj5Mw3qxK5yzoZ14PGIw7D0KywT9LUG5THF35C14ipVloWDwjQE75Q',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAz8UWwmG5utHPdEkpVN2pWuc5xQMR5LkG1FyZNFGed36xwhNPPL9kgI-O4gFIUXoGs1MBqYIaqBjlRSYwG60Wd-7vyLTWtTya2aDHMuF31y7UtaXnyTM6gICUr0hKgtfqng_RZWgTSpdNvtfDxKG3TbJep8bHdUHta3Z1L9zGFGnSx1KdK8B4NpiU6ao2p8uRRfGWSFrIZEgqEDD0dHN1z6_pFErtWlZVHxG0mQLU6ZG0XdGM2d2qHyQ',
]

export default function InstagramFeed() {
  return (
    <section className="w-full bg-cream-base py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 text-center">
          <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
            Follow Us
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-espresso-ink md:text-4xl">
            @coffeepoint on Instagram
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`Instagram photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
