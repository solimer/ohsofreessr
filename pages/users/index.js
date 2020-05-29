import Link from 'next/link';

import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import List from '../../components/List';

const WithStaticProps = ({ items }) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;