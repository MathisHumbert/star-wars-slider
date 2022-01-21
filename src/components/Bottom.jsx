import styled from 'styled-components';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
const Bottom = () => {
  return (
    <Wrapper>
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
            <div>
              <div className='circle'></div>
              <div className='line'></div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Bottom;
