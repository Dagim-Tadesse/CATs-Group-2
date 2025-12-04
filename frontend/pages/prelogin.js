import Link from 'next/link'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { useTranslation } from '../utils/i18n'

// Decorative placeholder components to intensify visuals without logic
function SparkleBand(){
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-br from-blue-600/20 via-purple-500/20 to-cyan-400/20 blur-3xl animate-pulse"></div>
      <div className="absolute top-10 left-10 w-48 h-48 bg-white/10 backdrop-blur-md rounded-3xl rotate-6"></div>
      <div className="absolute bottom-10 right-16 w-56 h-56 bg-white/10 backdrop-blur-md rounded-full -rotate-6"></div>
    </div>
  )
}

function FloatingIcons(){
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-6 top-20 animate-bounce-slow">
        <img src="/logos/healthpass.svg" alt="icon" className="h-10 w-10 opacity-30"/>
      </div>
      <div className="absolute right-10 top-32 animate-bounce-slower">
        <img src="/logos/claimcraft.svg" alt="icon" className="h-10 w-10 opacity-30"/>
      </div>
      <div className="absolute left-20 bottom-16 animate-bounce-slowest">
        <img src="/logos/equimatch.svg" alt="icon" className="h-10 w-10 opacity-30"/>
      </div>
    </div>
  )
}

function NullSection(){
  return (
    <div className="relative py-10">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_,i)=> (
          <div key={i} className="h-32 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"></div>
        ))}
      </div>
    </div>
  )
}

export default function Prelogin(){
  const { t } = useTranslation()
  const products = [
    { slug: 'claimcraft', name: t('tm2_name'), short: t('tm2_desc'), features: ['AI bill scanner','Legal-ready PDF letters','One-click print/download'], logo: '/logos/claimcraft.svg' },
    { slug: 'healthpass', name: t('tm3_name'), short: t('tm3_desc'), features: ['Encrypted QR identity','Wallet & phone compatible','Instant patient timeline access'], logo: '/logos/healthpass.svg' },
    { slug: 'equimatch', name: t('tm1_name'), short: t('tm1_desc'), features: ['Smart matching engine','Risk-aligned suggestions','Real-time alerts'], logo: '/logos/equimatch.svg' }
  ]

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>
        <SparkleBand/>
        <FloatingIcons/>
        <div className="relative min-h-[70vh] flex items-center">
          <div className="max-w-5xl mx-auto py-24 px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 border border-blue-200 mb-4">New: {t('tm3_name')} <span className="text-xs text-blue-600">beta</span></div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              {t('appName')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('tagline')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Link href="/auth/login" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:shadow-lg transition">Get Started</Link>
              <Link href="/products" className="px-6 py-3 bg-white rounded-xl border shadow-sm hover:shadow transition">Explore Products</Link>
              <Link href="/demo/healthpass" className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:shadow-lg transition">Try HealthPass</Link>
            </div>

            <div className="text-sm text-gray-500">No account? You can try demos or explore features without logging in.</div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">{t('productsHeading')}</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {products.map(p => (
              <div key={p.slug} className="group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 blur opacity-0 group-hover:opacity-100 transition"></div>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <NullSection/>
    </Layout>
  )
}
