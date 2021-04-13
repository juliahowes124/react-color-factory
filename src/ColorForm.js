import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ColorForm({addColor}) {
  const [formData, setFormData] = useState({name: "", color: ""})
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor(formData);
    history.push('/colors');
  }

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData(fData => ({...fData, [name]: value}));

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color Name</label>
        <input type="text" name="name" id="name" value={formData["name"]} onChange={handleChange}/>
        <label htmlFor="color">Color</label>
        <input type="color" name="color" id="color" value={formData["color"]} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ColorForm;