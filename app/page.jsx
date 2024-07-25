import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Bienvenue</h1>
      <Link href="/properties">Voir les propriétés</Link>
    </div>
  )
}

export default HomePage
