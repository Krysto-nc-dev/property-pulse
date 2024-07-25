import '@/assets/styles/global.css'


export const metadata = {
  title: 'Property Pulse || Trouvez la maison de vos rêves',
  description:
    'Property Pulse est un site web immobilier offrant les dernières annonces et tendances du marché immobilier. Trouvez votre maison idéale parmi une vaste sélection de propriétés.',
  keywords:
    'immobilier, propriété, maison, domicile, achat immobilier, vente immobilière, location, annonces immobilières, marché immobilier, trouver une maison, location de maison, vente de maison',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout
