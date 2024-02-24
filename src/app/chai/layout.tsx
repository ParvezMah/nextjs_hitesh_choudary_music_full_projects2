export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h2>Inner Layout Item</h2>
        {children}
    </div>
  );
}
