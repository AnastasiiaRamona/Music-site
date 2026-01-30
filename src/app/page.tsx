import Home from './home/page';

export const dynamic = 'force-static';

export const metadata = {
  alternates: {
    canonical: 'https://anastasiia-ramona.netlify.app',
  },
};

export default function Main() {
  return <Home />;
}
