import Image from 'next/image'

const categories = [
  {
    name: 'Breakfast',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD82OXyi_fBJpQGr9aWYUYW5uFiKseLTtAUr_d3JUjplh2hU0Ar_V0eq-YWdpLDkcmnRBJO79KB8WgndlMjX1n2bCsZ596JUNbx8vRJcBMXeFhlRUpK7XbWFeSKbMARYxN2-4aSRJ0THAAFrL40x18zJGa7RNN9wk676RMrYr-IH4Be3eUEIO9Z3LeyURdo196jShF0d0JbkIJLQKxlwKBd47G0lIiMZkqNWw2TAzdg4J0sAIdvwMf-jg',
  },
  {
    name: 'Espresso',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDo8bHui10WMajB7TEfgcwWmOexlYMd1RePYzri4CmImxhTmuWcXb1ky6LCkzls0-ta-ERGtXC85MRlUtDM801J1zOpylrxUmNM4_BeaPtTUH5Xc7AbsYzcXYt2-8kPuff8dRllRBsVi9_QZgp14cELTBn8q7OfmqotffPcpmKqePyz5jBWX1I0Q9A45DwUjUEQ0pJjsOd5creV7n9NQSuRIfP6MutAE34BZF5_8qxKpsVaRGZz4dL1UA',
  },
  {
    name: 'Hand-Brewed',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-5L1-SVFgytquLQiJLFDd4fshoIIbrAsbT9VS-kuBMLcKmeM-SD7zAMQhqXXawZo_jAFlVoDq61nP4Mw5mLA8L7MdzC-ll4HL6kpUgJ-TKIvFwdGF4SvhsWltdysvFzWu6PilOrdtb1DhUvti0EJBLATdgiCq6Wy1YCNK5KMuDZG28dMy8WZgzqaM-l5roNJ_LXEDqotiAzExFRxes9HyoF9xl7BTH337weJSOCzC2pFoMaGSihvw2A',
  },
  {
    name: 'Pastries',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOU-Pzukk5JSGNghkqWo6QO-wu7N0ziT9dUiS8DCfHdkrNb49fmgINo3TYQ8UiAXl5k8l_RfGJHGgQovaHdSd3FtaOgMg10Fp1RVbYukiiaFJ70zu1GQxWZzXNoM8UEkHqkFaBvhgkP7y7fd8A_-yl37SaEH1quYYyE88LK9oVLgJS4n8HR-bEvZ-NGEuxOlSeRDhRNSi7XE_MrtyuUE0lK2HQjfzPd4PGJS24jlAgsFyjQyonF7rRRQ',
  },
  {
    name: 'Seasonal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXg7PlluwrWBaa2g30mr2PMnwkWcbdNKCbuCEvqa5-PtsLnuhtcFU__W4IDjxl6_va-VMkMk17KUZHSzCd1sU1RUdyxo0fCezuuy409vypk5bnhuX_n_QY4di9IhJEsT_FzqpIU7ebPdSv_NGYx8YGv8n08okHhlrHCy4sFSPBavO5erbv4dEq6rFjO-KsbZKA2Vd3m1IFr1ODhLwJSNv8DXZf7QTUByfloICOBcT8GV2uGt08-L_9ZA',
  },
]

export default function MenuCategories() {
  return (
    <section id="menu" className="w-full bg-cream-base py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 text-center">
          <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
            Our Menu
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-espresso-ink md:text-4xl">
            Explore Our Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={cat.image}
                alt={`${cat.name} category`}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block rounded-full bg-cream-base/90 px-3 py-1 text-xs font-medium text-espresso-ink backdrop-blur-sm">
                  {cat.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
