import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Container } from './Layout.styles';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
