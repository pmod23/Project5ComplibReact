import './App.css';

import Button from './components/Button/Button';
import Icon from './components/Icon/Icon';
import TextInput from './components/Forms/TextInput/Input';
import Dropdown from './components/Forms/Dropdown/Dropdown';
import NumberInput from './components/Forms/NumberInput/NumberInput';
import Checkbox from './components/Forms/Checkbox/Checkbox';

function App() {
  return (
    <div className="app-container">
    
      <Button type="primary" icon={<Icon type="heart" />} faded></Button>
      <TextInput label="Email" placeholder="hello@example.com" size="medium" />
      <Dropdown options={['Apple', 'Bananna', 'Orange']} label="Select Fruit" size="large" filled/>


      <NumberInput />


      <Checkbox checked label="Don't show this message again" />

    </div>
  );
}

export default App;
