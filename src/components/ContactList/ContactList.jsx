import React from "react";
import { DeleteBtn, ContactItem } from "./ContactList.styled";

export const ContactList = ({contacts, onDeleteContact}) => {
    if (!contacts || contacts.length===0) {
        
        return (<p>You don`t have any contacts</p>)
    }
    return (
        
        <ul>
               {contacts.map(({id, name, number}) => 
                <ContactItem key = {id}>{name}: {number}
                <DeleteBtn type="button" onClick = {()=> onDeleteContact(id)} >Delete</DeleteBtn>
            </ContactItem>
                )}
            
            </ul>
    )
}