const centeredStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  margin: '0',
  width: 'auto'
}

const Centered = (props) => (
  <div style={centeredStyle}>
    {props.children}
  </div>
)

export default Centered
