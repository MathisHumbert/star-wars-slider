import styled from 'styled-components';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
let data = [1, 2, 3, 4, 5];

const Bottom = ({ setIndex, index }) => {
  return (
    <Wrapper>
      <div className='left'>
        <button
          onClick={() => setIndex((index) => index - 1)}
          className={index === 1 ? null : 'active'}
          disabled={index === 1}
        >
          <BsArrowLeft />
        </button>
        <button
          onClick={() => setIndex((index) => index + 1)}
          className={index === 3 ? null : 'active'}
          disabled={index === 3}
        >
          <BsArrowRight />
        </button>
      </div>
      <div className='right'>
        {data.map((item) => {
          return (
            <div key={item} className='circle-line-container'>
              <div className={item <= index ? 'active circle' : 'circle'}></div>
              <div className={item <= index - 1 ? 'active line' : 'line'}></div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  .left {
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
    cursor: pointer;

    &.active {
      color: rgba(255, 243, 138, 1);
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .right {
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
    background: rgba(130, 123, 104, 1);
    border-radius: 50%;
    transition: background 0.5s linear;

    &.active {
      background: rgba(255, 243, 138, 1);
    }
  }

  .line {
    position: absolute;
    height: 1px;
    background: rgba(130, 123, 104, 1);
    width: 100%;
    top: 50%;
    left: 32px;
    transform: translateY(-50%);

    &:after {
      content: '';
      position: absolute;
      height: 1px;
      background: rgba(255, 243, 138, 1);
      width: 0%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      transition: width 0.5s linear;
    }

    &.active {
      &:after {
        width: 100%;
      }
    }
  }
`;
export default Bottom;
