import { GetStaticProps } from 'next';

export const getStaticProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
};

export default getStaticProps;