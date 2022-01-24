import styled from 'styled-components'

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

function App() {
  return (
    <Wrapper>
      <Button>No Props</Button>
      <br />
      <br />
      <br />
      <Button primary>Primary</Button>
      <br />
      <br />
      <br />
      <XLButton>XL Button</XLButton>
      <br />
      <br />
      <br />
      <br />
      <ReverseButton>
        Salih Kalender
      </ReverseButton>
      <br />
      <br />
      <Input t='password' />
      <br />
      <br />
      <Input />
      <br />
      <br />
      <Input t='radio'/>
      <br />
      <br />
      <MessageWrapper message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit neque asperiores harum tempore vitae deleniti molestias amet ipsum sunt.' />
    </Wrapper>
  )
}

export default App