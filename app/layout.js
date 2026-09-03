export const metadata = {
  title: "CineFlow AI",
  description: "Générateur de vidéos cinématographiques avec IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}