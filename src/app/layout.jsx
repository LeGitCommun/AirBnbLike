import Header from "../components/Header";
import Filters from "../components/Filters"

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body>

        <Header />
        <Filters />

        {children}
      </body>
    </html>
  )
}