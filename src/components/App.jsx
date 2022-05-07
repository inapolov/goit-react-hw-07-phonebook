import { useState } from "react";
import PropTypes from 'prop-types';
import Form from './Form';
import ContactList from "./ContactList";
import Filter from "./Filter";



function App() {
 
  const [filter, setFilter] = useState('');
  
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

    return (
      <div>     
        <h1>Phonebook</h1>
        <Form />        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter}/>        
        <ContactList filter={filter}/>
      </div>
    )
};

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.shape),
};

export default App;