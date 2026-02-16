import { useEffect, useState } from "react";

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUser() {
      setLoading(true);
      setError(null);
      setUser(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();
        setUser(data);
      } catch (e) {
        // Abort болса error көрсетпейміз
        if (e.name !== "AbortError") {
          setError(e.message || "Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }

    loadUser();

    // ✅ cleanup: component unmount болса fetch тоқтайды
    return () => controller.abort();
  }, [userId]); // ✅ dependency array: userId өзгерсе қайта fetch болады

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>User Profile</h2>

      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}

      {user && (
        <div style={styles.info}>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Company:</b> {user.company?.name}</p>
          <p><b>Website:</b> {user.website}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    maxWidth: 520,
    margin: "40px auto",
    padding: 20,
    borderRadius: 14,
    background: "linear-gradient(135deg, #111827, #0b1220)",
    color: "#e5e7eb",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
  },
  title: { marginTop: 0, marginBottom: 14, letterSpacing: 0.4 },
  loading: { color: "#93c5fd", fontWeight: 600 },
  error: { color: "#fca5a5", fontWeight: 700 },
  info: { lineHeight: 1.7 },
};
