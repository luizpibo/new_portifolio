'use client'

export default function Education() {
  return (
    <section id="formacao" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-12">
          Formação
        </h2>

        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-lg font-medium text-white">
                  Bacharel em Ciência da Computação
                </h3>
                <p className="text-neutral-400">
                  Universidade Católica de Brasília
                </p>
              </div>
              <span className="text-sm text-neutral-600 shrink-0">
                2018 — 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
