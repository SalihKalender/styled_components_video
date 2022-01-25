import styled, { css, keyframes } from 'styled-components'

const Wrapper = styled.section`
  width: 40%;
  text-align: center;
  margin: 150px auto;
  background: ${props => props.BG ? '#E7A44C' : '#ddd'};
  padding: 15px;
`

const Button = styled.button`
  color: ${props => props.primary ? '#BE9F7B' : '#54AE77'};
  background: #333;
  border: 2px solid #a80;
  padding: ${props => props.size || '20px'};
  margin: 15px;

  &:hover {
    color: #20BAC9
  }

  & + & {
    color: #0B5F3D
  }

`

const XLButton = styled(Button)`
  color: blue;
  font-size: 20px;
`

const Input = styled.input.attrs(props => (
  {
    type: props.t || 'text'
  }
))`
  width: 150px;
  padding: 10px 20px;
`


const ReverseButton = (props) => (
  <Button primary size='30px' children={props.children.split('').reverse()} />
)

const MessageWrapper = ({ message }) => (
  <Wrapper BG> {message} </Wrapper>
)

const ModeContainer = styled.div`
  ${props => {
    switch(props.mode) {
      case 'dark':
        return css`
          color: #fff;
          background: #333;
        `
      default:
        return css`
          color: #333;
          background: #fff;
        `
    }
  }}
  padding: 40px;
  margin: 25px;
`


const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`
const RotateConteiner = styled.div`
  animation: ${rotateAnimation} 2s linear infinite;
  margin: 20px;
  padding: 20px;
`

function App() {
  //! Burada styled Component Olusturma !!!!
  return (
    <Wrapper>
      <Button primary>Primary Button</Button>
      <Button primary>Primary Button</Button>
      <br />
      <Input t='radio' />
      <ModeContainer mode='dark'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatum ipsam. Earum accusantium facilis quasi incidunt molestias, provident quos accusamus?
      </ModeContainer>
      <ModeContainer>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat cumque eum nam nisi vel nesciunt suscipit voluptatem? Sed, accusamus.
      </ModeContainer>
      <RotateConteiner>
      💅🏾
      </RotateConteiner>
    </Wrapper>
  )
}

export default App