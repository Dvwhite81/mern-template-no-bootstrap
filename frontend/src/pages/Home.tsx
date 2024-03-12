import { SyntheticEvent } from 'react';
import { UserType } from '../utils/types';
import Search from '../components/Search';

interface HomeProps {
  query: string;
  setQuery: (value: string) => void;
  handleSubmit: (e: SyntheticEvent) => void;
  loggedInUser: UserType | null;
}

const Home = ({ query, setQuery, handleSubmit }: HomeProps) => {
  return (
    <div className="page">
      <Search query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
