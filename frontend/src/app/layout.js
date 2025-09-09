import "./globals.css";

export const metadata = {
  title: "MindfulU - Digital Mental Health Support for Students",
  description: "Navigate Your Mind, Unlock Your Potential with MindfulU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link href="data:image/x-icon;base64," rel="icon" type="image/x-icon" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossorigin=""
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg-color)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
