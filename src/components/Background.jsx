export default function Background() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-sky-50 to-emerald-50"></div>

      {/* Particle 1 */}
      <div
        className="particle"
        style={{
          "--tx": "30vw",
          "--ty": "-40vh",
          top: "50vh",
          left: "20vw",
          width: "150px",
          height: "150px",
          animationDuration: "25s",
        }}
      />

      {/* Particle 2 */}
      <div
        className="particle"
        style={{
          "--tx": "-20vw",
          "--ty": "50vh",
          top: "20vh",
          left: "80vw",
          width: "200px",
          height: "200px",
          animationDuration: "30s",
          background: "var(--glow-color-2)",
        }}
      />

      {/* Particle 3 */}
      <div
        className="particle"
        style={{
          "--tx": "-40vw",
          "--ty": "-30vh",
          top: "80vh",
          left: "60vw",
          width: "100px",
          height: "100px",
          animationDuration: "20s",
          background: "var(--glow-color-3)",
        }}
      />

      {/* Overlay Glows */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/50 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent opacity-50 blur-3xl"></div>
    </div>
  );
}
