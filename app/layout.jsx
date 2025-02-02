import '@/assets/styles/global.css'
import AuthProvider from '@/components/AuthProvider'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Property Pulse || Trouvez la maison de vos rêves',
  description:
    'Property Pulse est un site web immobilier offrant les dernières annonces et tendances du marché immobilier. Trouvez votre maison idéale parmi une vaste sélection de propriétés.',
  keywords:
    'immobilier, propriété, maison, domicile, achat immobilier, vente immobilière, location, annonces immobilières, marché immobilier, trouver une maison, location de maison, vente de maison',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="fr">
        <body>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
