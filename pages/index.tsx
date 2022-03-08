import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BigSwitch from '../components/bigSwitch/bigSwitch';
import { AppMain } from '../components/AppMain';
import st from '../styles/Home.module.css';
import { SkillsCard } from '../components/sectionLeft/SkillsCard';
import { InfoPanel } from '../components/sectionRight/InfoPanel';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carlos&apos;s Profile</title>
        <meta name='description' content='porfolio with Carlos Campos profile' />
        <link rel='icon' href='../../profileLogo.svg' />
      </Head>
      <AppMain>
        <BigSwitch />
        <SkillsCard />
        <InfoPanel />
      </AppMain>
    </>
  );
};

export default Home;

/** NextJs Page Transition example
 * https://github.com/ivandotv/nextjs-page-transitions/blob/main/pages/_app.tsx
 * */
