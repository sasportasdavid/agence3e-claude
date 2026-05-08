import { ImageResponse } from "next/og";

/**
 * Open Graph image — racine du site.
 *
 * Généré statiquement par Next.js (App Router file convention).
 * Utilise LOGO_HERO sur fond #0A2540 (--primary), conformément à la
 * matrice Section 2 du Logo Guidelines : « Bannière email marketing /
 * hero supports → LOGO_HERO ».
 *
 * 1200×630 = ratio Open Graph + Twitter card large.
 *
 * Les Inter / Source Serif Pro Italic sont chargées via Google Fonts
 * woff2 puis embedded dans le PNG par Satori.
 */

export const alt =
  "Agence 3E — Conformité DDADUE, primes CEE optimisées, travaux pilotés.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
  // Fontsource (jsDelivr) sert directement les .woff2 binaires, contrairement
  // à fonts.gstatic.com qui peut servir une page HTML selon le user-agent.
  const [interBold, sourceSerifItalic] = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff",
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/source-serif-4@latest/latin-400-italic.woff",
    ).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A2540",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Halo / aurore subtle background — gradient radial pastel */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(900px 380px at 80% 18%, rgba(245,197,24,0.18), transparent 60%), radial-gradient(700px 320px at 18% 82%, rgba(0,168,107,0.16), transparent 60%)",
            display: "flex",
          }}
        />

        {/* LOGO_HERO — wordmark blanc + ligne aurore + baseline italique. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: 280,
              color: "#FFFFFF",
              letterSpacing: -10,
              lineHeight: 1,
            }}
          >
            A3E
          </div>

          {/* Ligne aurore — gradient horizontal */}
          <div
            style={{
              marginTop: 32,
              width: 720,
              height: 8,
              borderRadius: 4,
              background:
                "linear-gradient(90deg, #6BCFA0 0%, #F5C518 50%, #6E91D8 100%)",
              display: "flex",
            }}
          />

          {/* Baseline italique */}
          <div
            style={{
              marginTop: 36,
              fontFamily: "SourceSerifPro",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 38,
              color: "rgba(255,255,255,0.78)",
              letterSpacing: -0.4,
            }}
          >
            Transformez vos obligations en opportunités.
          </div>
        </div>

        {/* Footer mention agence — JetBrains Mono substitué par mono fallback */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 18,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          AGENCE · EXPERTISE · ÉCONOMIE · ÉNERGIE
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "SourceSerifPro",
          data: sourceSerifItalic,
          weight: 400,
          style: "italic",
        },
      ],
    },
  );
}
