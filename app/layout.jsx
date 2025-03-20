import MainLayout from "../components/main-layout";
import GlobalConfetti from "../components/atoms/globalconfetti/globalconfetti";
import { GlobalProvider } from "../context/global-context";

// export const metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app'
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
      <body>
        {/*  <GlobalConfetti /> */}
        <GlobalProvider>
          <MainLayout>{children}</MainLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
