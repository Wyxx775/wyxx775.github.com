import { createFileRoute } from '@tanstack/react-router'
import {
  BUSINESS_CREATION_FORM_URL,
  DISCORD_INVITE_URL,
  TAX_DECLARATION_FORM_URL,
} from '@/data/links'
import {
  Building2,
  FileSpreadsheet,
  Landmark,
  MessageSquare,
  ScrollText,
  ShieldCheck,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const NAV_ITEMS = [
  {
    label: 'Contacter la Préfecture',
    icon: MessageSquare,
    href: DISCORD_INVITE_URL,
  },
  {
    label: "Déclaration d'impôts",
    icon: ScrollText,
    href: TAX_DECLARATION_FORM_URL,
  },
  {
    label: 'Création d’entreprise',
    icon: Building2,
    href: BUSINESS_CREATION_FORM_URL,
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#1e1e1e]">
      <TricolorBar />
      <GovHeader />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <InfoStrip />
      <Footer />
    </div>
  )
}

function TricolorBar() {
  return (
    <div className="h-[5px] w-full flex" aria-hidden="true">
      <div className="flex-1 bg-[#000091]" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-[#e1000f]" />
    </div>
  )
}

function GovHeader() {
  return (
    <header className="bg-white border-b border-[#dddddd] sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-between text-[11px] tracking-wide text-[#3a3a3a] border-b border-[#ececec]">
        <span>RÉPUBLIQUE FRANÇAISE</span>
        <span className="hidden sm:block">Bouches-du-Rhône · Marseille</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 shrink-0 bg-[#000091] relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[#e1000f]" />
          <div className="absolute left-0 top-0 h-full w-1/3 bg-white/90" />
          <Landmark
            className="w-6 h-6 text-white relative z-10"
            strokeWidth={1.75}
          />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#3a3a3a]">
            Préfecture de Marseille
          </p>
          <p className="text-lg sm:text-xl font-bold leading-tight text-[#000091]">
            Portail des démarches administratives
          </p>
        </div>
      </div>

      <nav
        aria-label="Démarches principales"
        className="border-t border-[#dddddd] bg-[#f6f6f6]"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-stretch text-sm">
          <span className="flex items-center py-3 pr-6 font-semibold text-[#1e1e1e] border-b-2 border-[#000091]">
            Accueil
          </span>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 py-3 px-4 sm:px-5 text-[#000091] border-b-2 border-transparent hover:border-[#000091] hover:bg-[#e8e8ff] transition-colors"
            >
              <item.icon className="w-4 h-4" strokeWidth={1.75} />
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/wyxx775/images/prefecture-hero.jpg"
          alt="Façade de l'hôtel de préfecture des Bouches-du-Rhône à Marseille"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000091]/95 via-[#000091]/70 to-[#000091]/40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-white">
        <p className="uppercase tracking-[0.3em] text-xs text-white/80 mb-4">
          Liberté · Égalité · Fraternité
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-2xl">
          Préfecture de Marseille
        </h1>
        <p className="max-w-xl text-base md:text-lg text-white/85 leading-relaxed mb-10">
          Portail officiel des démarches du serveur. Contactez nos services,
          déclarez vos impôts et formalisez la création de votre entreprise
          en toute simplicité.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#e1000f] text-white font-semibold px-6 py-3 hover:bg-[#c5000d] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Contacter la Préfecture
          </a>
          <a
            href={TAX_DECLARATION_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-semibold px-6 py-3 hover:bg-white/20 transition-colors"
          >
            <ScrollText className="w-4 h-4" />
            Déclarer mes impôts
          </a>
          <a
            href={BUSINESS_CREATION_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-semibold px-6 py-3 hover:bg-white/20 transition-colors"
          >
            <Building2 className="w-4 h-4" />
            Créer mon entreprise
          </a>
        </div>
      </div>

      <p className="absolute bottom-2 right-3 text-[10px] text-white/60">
        Photo : Chabe01 / Wikimedia Commons, CC BY-SA 4.0
      </p>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Contacter la Préfecture',
      description:
        "Une question, une réclamation ou besoin d'assistance ? Notre équipe vous répond sur le serveur Discord officiel.",
      actionLabel: 'Rejoindre le Discord',
      href: DISCORD_INVITE_URL,
    },
    {
      number: '02',
      icon: ScrollText,
      title: "Déclaration d'impôts",
      description:
        'Remplissez votre déclaration annuelle de revenus auprès des services fiscaux de la Préfecture.',
      actionLabel: 'Faire ma déclaration',
      href: TAX_DECLARATION_FORM_URL,
    },
    {
      number: '03',
      icon: Building2,
      title: "Création d'entreprise",
      description:
        'Déposez votre dossier de création d’entreprise et obtenez votre immatriculation officielle.',
      actionLabel: 'Créer mon entreprise',
      href: BUSINESS_CREATION_FORM_URL,
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="uppercase tracking-[0.25em] text-xs text-[#e1000f] font-semibold mb-3">
          Nos services
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#000091]">
          Effectuer une démarche
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-[#dddddd] border border-[#dddddd]">
        {services.map((service) => (
          <ServiceTile key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}

function ServiceTile({
  number,
  icon: Icon,
  title,
  description,
  actionLabel,
  href,
}: {
  number: string
  icon: React.ElementType
  title: string
  description: string
  actionLabel: string
  href: string
}) {
  return (
    <div className="group relative bg-white p-8 flex flex-col border-l-4 border-[#000091] hover:border-[#e1000f] transition-colors">
      <span className="text-xs font-bold text-[#929292] mb-6">{number}</span>
      <div className="w-11 h-11 flex items-center justify-center bg-[#f6f6f6] text-[#000091] mb-5">
        <Icon className="w-5 h-5" strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-bold mb-3 text-[#1e1e1e]">{title}</h3>
      <p className="text-sm text-[#3a3a3a] leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#000091] group-hover:text-[#e1000f] transition-colors w-fit"
      >
        {actionLabel} →
      </a>
    </div>
  )
}

function AboutSection() {
  return (
    <section className="bg-white border-y border-[#dddddd]">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-xs text-[#e1000f] font-semibold mb-3">
            L'institution
          </p>
          <h2 className="text-3xl font-extrabold text-[#000091] mb-5">
            L'hôtel de préfecture des Bouches-du-Rhône
          </h2>
          <p className="text-[#3a3a3a] leading-relaxed mb-4">
            Édifié entre 1862 et 1866, l'hôtel de préfecture surplombe le
            boulevard Charles-Nédélec dans le 6<sup>e</sup> arrondissement de
            Marseille. Son architecture néoclassique et sa cour d'honneur en
            font l'un des bâtiments institutionnels les plus imposants de la
            ville.
          </p>
          <p className="text-[#3a3a3a] leading-relaxed">
            Sur ce serveur, le bâtiment prête son cadre au roleplay de la
            Préfecture : c'est ici, fictivement, que sont instruites les
            démarches de contact, de fiscalité et de création d'entreprise
            de la communauté.
          </p>
        </div>
        <div className="relative">
          <div className="border-4 border-[#f6f6f6] shadow-[0_0_0_1px_#dddddd]">
            <img
              src="/wyxx775/images/prefecture-facade.jpg"
              alt="Façade historique de l'hôtel de préfecture des Bouches-du-Rhône"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          <p className="mt-2 text-[10px] text-[#929292]">
            Wikimedia Commons, CC BY-SA 2.0
          </p>
        </div>
      </div>
    </section>
  )
}

function InfoStrip() {
  const items = [
    {
      icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />,
      title: 'Service officiel',
      text: 'Toutes les démarches sont traitées par les agents de la Préfecture.',
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5" strokeWidth={1.75} />,
      title: 'Formulaires sécurisés',
      text: 'Vos demandes sont transmises via des formulaires dédiés et suivies par nos services.',
    },
    {
      icon: <MessageSquare className="w-5 h-5" strokeWidth={1.75} />,
      title: 'Support réactif',
      text: 'Une équipe disponible sur Discord pour répondre à vos démarches administratives.',
    },
  ]

  return (
    <section className="bg-[#f6f6f6]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-3 gap-10">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <div className="text-[#000091] mt-1">{item.icon}</div>
            <div>
              <h4 className="font-bold mb-1 text-[#1e1e1e]">{item.title}</h4>
              <p className="text-sm text-[#3a3a3a] leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t-4 border-[#000091]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-9 h-9 bg-[#000091]">
            <Landmark className="w-4 h-4 text-white" strokeWidth={1.75} />
          </div>
          <span className="font-bold text-[#000091]">
            Préfecture de Marseille
          </span>
        </div>
        <p className="text-xs text-[#3a3a3a] leading-relaxed max-w-2xl">
          Préfecture de Marseille — univers de roleplay. Ce site est une
          fiction à usage communautaire et ne représente pas un service
          administratif réel. Photographies de l'hôtel de préfecture des
          Bouches-du-Rhône reproduites depuis Wikimedia Commons sous licence
          CC BY-SA (Chabe01, CC BY-SA 4.0 ; CC BY-SA 2.0).
        </p>
      </div>
    </footer>
  )
}
