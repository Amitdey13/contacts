import React, {useState} from 'react'
import '../style/contactList.css'
import { ViewModel, FormModel } from './Model'



function ContactList({fav}) {
    const [view, setView] = useState(false);
    const [pass, setPass] = useState({})
    const [edit, setEdit] = useState(false)
    const data = [
        {
            firstName:'Abhinav',
            lastName:'Dey',
            email:'abhinavbetichod@gmail.com',
            phone:'7654324566',
            favMark:true
        },
        {
            firstName:'Abhinav',
            lastName:'Dey',
            email:'abhinavbetichod@gmail.com',
            phone:'7654324511',
            favMark:false
        },
        {
            firstName:'Abhinav',
            lastName:'Dey',
            email:'abhinavbetichod@gmail.com',
            phone:'7654324522',
            favMark:false
        }
    ]
    const View = data => {
        setView(true)
        setPass({...data})
    }
    const Edit = () => setEdit(true)
    const close = () => {
        setView(false)
        setPass({})
    }
    return (
        <div className="contact_container">
            {fav?data:data.map(contact => (
                <div className="contact_card" key={contact.phone}>
                    <li onClick={()=>View(contact)} className="pointer">{contact.firstName} {contact.lastName}</li>
                    <li>{contact.email}</li>
                    <li>{contact.phone}</li>
                </div>
            ))}
            {view?<ViewModel edit={Edit} close={close} {...pass} />:null}
            {edit?<FormModel title="Edit contact"  {...pass} />:null}
        </div>
    )
}

export default ContactList;
