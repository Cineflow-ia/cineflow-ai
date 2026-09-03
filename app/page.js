export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b12",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <h1 style={{ fontSize: "28px", margin: 0 }}>
            🎬 CineFlow AI
          </h1>

          <button
            style={{
              background: "white",
              color: "#111",
              border: "none",
              borderRadius: "10px",
              padding: "12px 20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Se connecter
          </button>
        </header>

        <section style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              background: "#191923",
              padding: "8px 16px",
              borderRadius: "30px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            ✨ Création vidéo par intelligence artificielle
          </div>

          <h2
            style={{
              fontSize: "56px",
              lineHeight: "1.1",
              margin: "10px auto 20px",
              maxWidth: "800px",
            }}
          >
            Transforme tes idées en vidéos cinématographiques
          </h2>

          <p
            style={{
              color: "#aaa",
              fontSize: "19px",
              maxWidth: "650px",
              margin: "0 auto 40px",
              lineHeight: "1.6",
            }}
          >
            Décris ton idée ou colle ton scénario.
            CineFlow AI transforme ton texte en scènes vidéo
            prêtes pour TikTok et YouTube.
          </p>

          <button
            style={{
              background: "#7c3aed",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "16px 30px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🎬 Créer ma première vidéo
          </button>
        </section>

        <section
          style={{
            marginTop: "90px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#15151f",
              padding: "25px",
              borderRadius: "16px",
            }}
          >
            <h3>✍️ 1. Décris</h3>
            <p style={{ color: "#aaa" }}>
              Écris ton idée ou colle ton scénario.
            </p>
          </div>

          <div
            style={{
              background: "#15151f",
              padding: "25px",
              borderRadius: "16px",
            }}
          >
            <h3>🤖 2. Génère</h3>
            <p style={{ color: "#aaa" }}>
              L'IA transforme ton scénario en scènes.
            </p>
          </div>

          <div
            style={{
              background: "#15151f",
              padding: "25px",
              borderRadius: "16px",
            }}
          >
            <h3>🚀 3. Publie</h3>
            <p style={{ color: "#aaa" }}>
              Télécharge et publie ta vidéo sur tes réseaux.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}