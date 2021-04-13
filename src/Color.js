import {useParams, Link, Redirect} from 'react-router-dom';

function Color({ colors }) {
  const { color } = useParams();
  let thisColor = colors.find(c => c.name === color);
  // const history = useHistory();

  // if(!thisColor) {
  //   history.push('/colors');
  // }

  //instead of null, return <Redirect/>
  return thisColor ? (
    <div style={{backgroundColor: thisColor.color, height: '100vh', width: '100%'}}>
      <h1>Here is {thisColor.name} in all its glory!</h1>
      <Link to="/colors">Go Home</Link>
    </div>
  ) : <Redirect to="/colors"/>;

}

export default Color;