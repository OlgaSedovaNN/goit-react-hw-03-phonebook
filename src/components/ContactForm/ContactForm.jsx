import React, {Component} from "react";
import { Form, ContactInput, AddContactBtn } from "./ContactForm.styled";
import { nanoid } from 'nanoid';



export class ContactForm extends Component {
    state={
        name: "",
        number: "",
        id: '',
    }
    inputChange = e => {
        this.setState({
          [e.currentTarget.name]: e.currentTarget.value,
          id: nanoid()}
        )
      }

    checkContacts = (contacts)=> {
        const normalizedName = this.state.name.toLowerCase();
        return contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    }
    formSubmit = e => {
      e.preventDefault();
      
      !this.checkContacts(this.props.contacts) ? this.props.onSubmit(this.state) : alert(`${this.state.name} is already in contacts.`)

      this.reset();
   
    }
    reset = () => {
        this.setState({
                name: "",
                number: "",
        })
    }
    render () { 
        const {name, number} = this.state;
        return (
     
        <Form onSubmit={this.formSubmit}>
            <label htmlFor="name">Name</label>
            <ContactInput type="text" value={name} onChange={this.inputChange} name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
                <label htmlFor="Number">Number</label>
            <ContactInput type="tel" name="number" value={number} onChange={this.inputChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required />
            <AddContactBtn type="submit" >Add contact</AddContactBtn>
        </Form>
    )
}}