const streamlitUrl =
  "https://tati-finance-app-ovfkztjgfrjhfrayfyj5id.streamlit.app";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        margin: 0,
        padding: "24px",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(245, 197, 92, 0.22), transparent 34%), linear-gradient(135deg, #021c14 0%, #064e3b 48%, #0f3d2e 100%)",
        color: "#f8fafc",
        display: "grid",
        placeItems: "center",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}
    >
      <section
        style={{
          width: "min(100%, 430px)",
          textAlign: "center",
          padding: "38px 26px",
          border: "1px solid rgba(245, 197, 92, 0.34)",
          borderRadius: "30px",
          background: "rgba(2, 28, 20, 0.52)",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.34)",
          backdropFilter: "blur(18px)"
        }}
      >
        <img
          src="/icon.png"
          alt="Tati Finance"
          style={{
            width: "112px",
            height: "112px",
            borderRadius: "28px",
            objectFit: "cover",
            marginBottom: "22px",
            boxShadow: "0 18px 42px rgba(0, 0, 0, 0.3)"
          }}
        />

        <h1
          style={{
            margin: "0 0 10px",
            fontSize: "42px",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#fff7df"
          }}
        >
          Tati Finance
        </h1>

        <p
          style={{
            margin: "0 0 30px",
            fontSize: "18px",
            color: "#e6d7a8",
            fontWeight: 500
          }}
        >
          Smart Finance. Better Life.
        </p>

        <a
          href={streamlitUrl}
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            borderRadius: "16px",
            padding: "15px 18px",
            background: "linear-gradient(135deg, #f5c55c, #d4af37)",
            color: "#052217",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "16px",
            boxShadow: "0 16px 34px rgba(212, 175, 55, 0.25)"
          }}
        >
          Open Finance Dashboard
        </a>
      </section>
    </main>
  );
}
