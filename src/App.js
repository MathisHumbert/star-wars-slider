import { useState } from 'react';
import styled from 'styled-components';
import Bottom from './components/Bottom';
import Top from './components/Top';
import data from './data';

function App() {
  const [index, setIndex] = useState(1);

  return (
    <Wrapper>
      <div className='center'>
        <div className='top'>
          {data.map((item) => {
            return <Top key={item.id} {...item} index={index} />;
          })}
        </div>
        <Bottom setIndex={setIndex} index={index} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .center {
    display: flex;
    flex-direction: column;
    gap: 100px;
    max-width: 1150px;
    margin: 0 auto;
  }

  .top {
    width: 100%;
    height: calc(100vh - 451px);
    position: relative;
  }
`;

export default App;
