import { DefaultButton } from '@components/Layout/atom/Button';
import { DefaultInput } from '@components/Layout/atom/Input';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 768px;
`;

const Home: NextPage = () => {
  return (
    <>
      <DefaultButton>Hello</DefaultButton>
      <DefaultInput />
    </>
  );
};

export default Home;
