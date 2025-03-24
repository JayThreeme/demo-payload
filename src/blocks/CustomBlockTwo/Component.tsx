import { Card, CardContent, CardTitle } from '@/components/ui/card'

import { Media } from '@/components/Media'
import { UseCasesProps } from './type'

const UseCasesComponent: React.FC<UseCasesProps> = ({ title, subtitle, useCases }) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <p className="text-sm text-neutral-400 uppercase tracking-wide">Solutions</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
        <p className="text-neutral-500 mt-2">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {useCases.map((caseItem, index) => (
          <Card
            key={index}
            className="bg-black text-white border border-gray-800 rounded-xl p-6 shadow-lg flex gap-4 items-center"
          >
            {caseItem.icon && (
              <Media resource={caseItem.icon} imgClassName="w-12 h-12 object-cover" />
            )}
            <div>
              <CardTitle>{caseItem.title}</CardTitle>
              <CardContent className="text-neutral-400 text-sm">{caseItem.description}</CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export { UseCasesComponent }
