import React from 'react';
import Parameter_Bar from '../components/Parameter_Bar';

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          <Parameter_Bar />
        </div>
      </div>
    </main>
  );
};

export default Home;
