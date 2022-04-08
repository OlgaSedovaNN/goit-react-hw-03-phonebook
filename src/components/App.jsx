import React, { Component } from "react";
import { ContactList } from "./ContactList/ContactList";
import {ContactForm} from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: 
    [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }

addContact = data => {
    this.setState((state)=> ({...state, contacts: [...state.contacts, data]}))
}

deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))

  }
componentDidMount() {
  const contactInLS = JSON.parse(localStorage.getItem('contacts'))
  if (contactInLS) {this.setState({contacts: contactInLS})}
}
componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
filterChange = (e) => {
  this.setState({
    filter: e.currentTarget.value
  })
}
  
getFilteredContacts = () => {
  const {contacts,filter} = this.state
  const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    )
}



  render() {
    const {contacts, filter} = this.state
    const filtredContacts = this.getFilteredContacts()
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={contacts}/>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterChange} />
        <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact}/>
   </div>
  )
  }
};
