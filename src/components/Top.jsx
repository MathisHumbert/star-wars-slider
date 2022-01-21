import styled from 'styled-components';

const Top = ({ id, logo, poster, date, title, text }) => {
  return (
    <Wrapper className={id === 1 ? 'activeSlide' : 'nextSlide'}>
      <div className='left'>
        <div className='info'>
          <img src={logo} alt='logo' />
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

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  &.nextSlide {
    opacity: 0;
  }
`;
export default Top;
