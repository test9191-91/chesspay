export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Bienvenue sur ChessPay</h1>
      <p className="text-xl mb-8">
        La plateforme ultime pour jouer aux échecs avec des paris en crypto
      </p>
      <div className="bg-white p-8 rounded-lg shadow-lg text-black">
        <h2 className="text-2xl font-semibold mb-4">Prochaines étapes :</h2>
        <ul className="list-disc pl-5">
          <li>Intégration de l'API Lichess</li>
          <li>Connexion des portefeuilles crypto</li>
          <li>Système de paris sécurisé</li>
        </ul>
      </div>
    </main>
  );
}