

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
    return(
        <main className="w-screen min-h-screen">

         {children}

        </main>
    )
}