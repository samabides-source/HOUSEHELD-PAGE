import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#4f46e5",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            backgroundColor: "#ffffff",
            fontSize: 56,
            marginBottom: 40,
          }}
        >
          🏠
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#ffffff" }}>
          Househeld
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 34,
            color: "#e0e7ff",
            maxWidth: 900,
          }}
        >
          Household chores for families and shared flats, in one place.
        </div>
      </div>
    ),
    { ...size },
  );
}
