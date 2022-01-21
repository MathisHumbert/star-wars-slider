import { useEffect, useState } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import styled from 'styled-components';
import Top from './components/Top';
import data from './data';
let tempData = [1, 2, 3, 4, 5];

function App() {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const lastIndex = data.length;
    if (index < 1) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(1);
    }
  }, [index]);

  return (
    <Wrapper>
      <div className='center'>
        <div className='top'>
          {data.map((item) => {
            return <Top key={item.id} {...item} index={index} />;
          })}
        </div>
        <div className='bottom'>
          <div className='left'>
            <button onClick={() => setIndex(index - 1)}>
              <BsArrowLeft />
            </button>
            <button onClick={() => setIndex(index + 1)}>
              <BsArrowRight />
            </button>
          </div>
          <div className='right'>
            {tempData.map((item) => {
              return (
                <div key={item} className='circle-line-container'>
                  <div className='circle'></div>
                  <div className='line'></div>
                </div>
              );
            })}
          </div>
        </div>
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
  /* bottom */
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
  }

  .bottom .left {
    display: flex;
    gap: 45px;
  }

  button {
    background: none;
    width: fit-content;
    font-size: 35px;
    line-height: 0;
    border: 0;
    color: rgba(130, 123, 104, 1);
  }

  .bottom .right {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .circle-line-container {
    position: relative;
    width: 100%;

    &:last-child .line {
      display: none;
    }

    &:last-child {
      width: fit-content;
    }
  }

  .circle {
    width: 32px;
    height: 32px;
    background: rgba(255, 243, 138, 1);
    border-radius: 50%;
  }

  .line {
    position: absolute;
    height: 1px;
    background: rgba(130, 123, 104, 1);
    width: 100%;
    top: 50%;
    left: 32px;
    transform: translateY(-50%);
  }
`;
export default App;
