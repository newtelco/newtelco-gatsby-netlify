import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 200px;
`

export const Testimonial = styled.div`
  /* position: absolute;
  transform: scale(0.8);
  object-position: center center;
  will-change: transform, opacity; */
  width: ${props => props.scale * 500}px;
  /* height: ${props => props.scale * 300}px; */
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-left: ${props => (props.offset === 'true' ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${props => (props.offset === 'true' ? props.scale * 80 : 0)}px;
`

export const Logo = styled.img`
  display: block;
  width: 65%;
  height: 65%;
  filter: grayscale(100%);
  opacity: 0.6;
`

export const FullWidth = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

export const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.height ? props.height + 'px' : 'auto')};
`

export const Author = styled.div`
  position: relative;
  font-size: 2rem;
  font-family: var(--font-family-serif);
  margin-bottom: 5px;
`

export const Company = styled.div`
  position: relative;
  font-size: 2rem;
  font-family: var(--font-family-serif);

  &:after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 3px;
    background: var(--primary-color);
    left: 0;
    margin-bottom: 4px;
    transition: .3s ease-in-out;
  }
`

export const Body = styled.div`
  position: relative;
  font-size: 1.5rem;
  font-family: var(--font-face-san-serif);
`
