import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import styled from 'styled-components';
let data = [1, 2, 3, 4, 5];

function App() {
  return (
    <Wrapper>
      <h1>star wars</h1>
      <div className='top'></div>
      <div className='bottom'>
        <div className='left'>
          <button>
            <BsArrowLeft />
          </button>
          <button>
            <BsArrowRight />
          </button>
        </div>
        <div className='right'>
          {data.map((item, index) => {
            return (
              <div key={item} className='circle-line-container'>
                <div className='circle'></div>
                <div className='line'></div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
    border: 1px solid red;
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
