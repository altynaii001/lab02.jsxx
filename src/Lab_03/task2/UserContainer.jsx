import { useState } from "react";
import UserProfile from "./UserProfile";

export default function UserContainer() {
  const [userId, setUserId] = useState(1);

  const refreshRandom = () => {
    // 1..10 арасында random user
    const next = Math.floor(Math.random() * 10) + 1;
    setUserId(next);
  };

  return (
    <div style={page.wrap}>
      <div style={page.top}>
        <h1 style={page.h1}>Lab 3.2 — Data Loading with useEffect</h1>
        <p style={page.p}>
          userId dependency, loading/error states, cleanup with AbortController ✅
        </p>

        <div style={page.btnRow}>
          <button style={page.btn} onClick={() => setUserId(1)}>User 1</button>
          <button style={page.btn} onClick={() => setUserId(2)}>User 2</button>
          <button style={page.btn} onClick={() => setUserId(3)}>User 3</button>
          <button style={page.btnGlow} onClick={refreshRandom}>Refresh (Random)</button>
        </div>

        <div style={page.badge}>Current userId: {userId}</div>
      </div>

      <UserProfile userId={userId} />
    </div>
  );
}

const page = {
  wrap: {
    minHeight: "100vh",
    padding: 24,
    background: "radial-gradient(circle at top, #0f172a, #05070f)",
  },
  top: { textAlign: "center", color: "#e5e7eb" },
  h1: { margin: "18px 0 8px" },
  p: { margin: 0, opacity: 0.8 },
  btnRow: {
    marginTop: 16,
    display: "flex",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  btn: {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "#e5e7eb",
    cursor: "pointer",
  },
  btnGlow: {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid rgba(59,130,246,0.35)",
    background: "linear-gradient(135deg, rgba(59,130,246,0.35), rgba(147,197,253,0.15))",
    color: "#e5e7eb",
    cursor: "pointer",
    fontWeight: 700,
  },
  badge: {
    display: "inline-block",
    marginTop: 14,
    padding: "6px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
  },
};
