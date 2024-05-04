import "./globals.css";

export const metadata = {
  title: "Animal Hub",
  description: "Created for children.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
