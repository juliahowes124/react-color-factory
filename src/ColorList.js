import {Link} from 'react-router-dom';

function ColorList(props) {
  const {colors} = props;
//add key
  return (
    <div>
      <h1>Welcome to the Color Factory!</h1>
      <Link to="/colors/new">Add a Color</Link>
      <h3>Colors</h3>
      { colors.map(c => (
        <div>
          <Link to={`/colors/${c.name}`}>{c.name}</Link>
          <br/>
        </div>
      ))}
    </div>
  )
}

export default ColorList;