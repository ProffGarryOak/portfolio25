"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("https://drive.google.com/file/d/1yAOHAnoTuXbvbRmA_G4GuKoussHvMM7k");
    }, 2000);
  }, [router]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#333" }}>Redirecting to Resume...</h1>
      <p style={{ color: "#666" }}>Please wait while we take you to the resume page.</p>
    </div>
  );
}