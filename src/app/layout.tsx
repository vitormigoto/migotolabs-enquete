export const metadata = {
  title: 'MigotoLabs - Enquete',
  description: 'Responda perguntas das suas duvidas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
