const cardStyle = {
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  margin: '20px',
  padding: '25px',
  borderRadius: '5px',
  width: '800px',
  maxWidth: '90%',
  height: 'auto',
  backgroundColor: '#fff'
}

const Card = (props) => (
  <div style={{ ...cardStyle, ...props.style }}>
    {props.children}
  </div>
)

export default Card
