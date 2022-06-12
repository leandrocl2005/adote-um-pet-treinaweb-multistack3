import '../ui/styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from '../ui/themes/theme';
import type { AppProps } from 'next/app'
import Header from '../ui/components/Header';
import AdminHeader from '../ui/components/AdminHeader';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
       {router.pathname === '/' ? <Header /> : <AdminHeader />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp
