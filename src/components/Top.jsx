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
        <h1>
          19<span>{date}</span>
        </h1>
      </div>
      <div className='right'>
        <img src={poster} alt='poster' className='poster' />
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

    span {
      opacity: 1;
      transform: translateX(0);
    }

    .poster {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &.nextSlide {
    h4 {
      opacity: 0;
      transform: translateX(80px);
    }

    p {
      opacity: 0;
      transform: translateX(80px);
    }

    .logo {
      opacity: 0;
      transform: translateX(100%);
    }

    span {
      opacity: 0;
      transform: translateX(80px);
    }

    .poster {
      opacity: 0;
      transform: translateX(100%);
    }
  }

  &.lastSlide {
    h4 {
      opacity: 0;
      transform: translateX(-80px);
    }

    p {
      opacity: 0;
      transform: translateX(-80px);
    }

    .logo {
      opacity: 0;
      transform: translateX(-100%);
    }

    span {
      opacity: 0;
      transform: translateX(-80px);
    }

    .poster {
      opacity: 0;
      transform: translateX(-100%);
    }
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logo,
  h4,
  p,
  span,
  .poster {
    transition: all 0.5s ease-in-out;
  }

  h4 {
    margin-top: 24px;
    margin-bottom: 8px;
    font-size: 40px;
    line-height: 49px;
    width: fit-content;
  }

  p {
    font-size: 20px;
    max-width: 340px;
    line-height: 30px;
    width: fit-content;
  }

  h1 {
    font-size: 223px;
    display: flex;

    line-height: 0.75;
  }

  span {
    display: inline-block;
  }

  .right {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .poster {
    aspect-ratio: 2 / 3;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Top;
