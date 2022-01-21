import styled from 'styled-components';
import data from '../data';

const Top = ({ id, logo, poster, date, title, text, index }) => {
  let position = 'nextSlide';
  if (id === index) {
    position = 'activeSlide';
  }
  if (id === index - 1 || (index === 1 && id === data.length)) {
    position = 'lastSlide';
  }

  return (
    <Wrapper className={position}>
      <div className='left'>
        <div className='info'>
          <img src={logo} alt='logo' className='logo' />
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <h1>{date}</h1>
      </div>
      <div className='right'>
        <img src={poster} alt='poster' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 120px;
  color: rgba(255, 243, 138, 1);

  &.activeSlide {
    h4 {
      opacity: 1;
      transform: translateX(0);
    }

    p {
      opacity: 1;
      transform: translateX(0);
    }

    .logo {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &.nextSlide {
    h4 {
      opacity: 0;
      transform: translateX(100%);
    }

    p {
      opacity: 0;
      transform: translateX(100%);
    }

    .logo {
      opacity: 0;
      transform: translateX(100%);
    }
  }

  &.lastSlide {
    h4 {
      opacity: 0;
      transform: translateX(-100%);
    }

    p {
      opacity: 0;
      transform: translateX(-100%);
    }

    .logo {
      opacity: 0;
      transform: translateX(-100%);
    }
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logo {
    transition: all 0.4s ease;
  }

  h4 {
    margin-top: 24px;
    margin-bottom: 8px;
    font-size: 40px;
    line-height: 49px;
  }

  p {
    font-size: 20px;
    max-width: 340px;
    line-height: 30px;
  }

  h1 {
    font-size: 223px;
  }

  .right {
    img {
      aspect-ratio: 2 / 3;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default Top;
