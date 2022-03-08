import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import st from '../styles/Home.module.css';

interface Props {
  children?: React.ReactNode;
}

export const AppMain = (props: Props) => {
  return (
    <section className='container dark'>
      <Header />
      {/*children*/}
      <main className='main'>{props.children}</main>
      <Footer />
    </section>
  );
};
