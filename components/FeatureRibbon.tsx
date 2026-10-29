import { getTranslations } from 'next-intl/server'

export default async function FeatureRibbon() {
  const t = await getTranslations('home.features')
  const features = t.raw('items') as Array<{
    emoji: string
    title: string
  }>

  return (
    <div className="w-full bg-espresso-ink py-5">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center gap-2">
            <span className="text-lg">{feature.emoji}</span>
            <span className="text-sm font-medium text-cream-base/90">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
