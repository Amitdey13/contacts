// -------------------- Import
import React from 'react';
import { MdFavoriteBorder, MdFavorite, MdClose } from 'react-icons/md'
import { FiEdit2, FiPhone } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import '../style/model.css'

//------------------------------------
//------------------------ View Model
//------------------------------------
export function ViewModel({firstName, lastName, phone, email, favMark, edit, close}){
    return(
        <div className="view_model">
        <div className="viewmodel_container">
            <div className="topbar">
                <div className="name">{firstName} {lastName}</div>
                <div className="buttons">
                    <li onClick='{fav}'>{favMark?<MdFavorite className="icon" />:<MdFavoriteBorder className="icon" />}</li>
                    <li onClick={edit}><FiEdit2 className="icon" /></li>
                    <li onClick='{del}'><RiDeleteBin6Line className="icon" /></li>
                    <li><MdClose onClick={close} className="icon" /></li>
                </div>
            </div>
            <div className="body">
                <h4>Contact details</h4>
                <div className="details">
                    <li><FiPhone className="i" />{phone}</li>
                    <li><HiOutlineMail className="i" />{email}</li>
                </div>
            </div>
        </div>
        </div>
    )
}

//------------------------------------
// ----------------------- Form model
//------------------------------------
export function FormModel({title, firstName, lastName, phone, email, favMark, cancel, save}){
    return(
        <div className="formModel">
            <div className="formmodel_container">
            <div className="topbar">{title}</div>
            <form>
                <div className="fullname">
                    <div class="group">      
                        <input value={firstName} type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>First name</label>
                    </div>
                    <div class="group">      
                        <input  value={lastName} type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Last name</label>
                    </div>
                </div>
                <div className="phone">
                    <FiPhone />
                    <div class="group">      
                        <input value={phone} type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Phone</label>
                    </div>
                </div>
                <div className="email">
                    <HiOutlineMail />
                    <div class="group">      
                        <input value={email} type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                    </div>
                </div>
            </form>
            <div className="footer">
                <li className="blue" onClick={cancel}>Cancel</li>
                <li className="blue" onClick={save}>Save</li>
            </div>
        </div></div>
    )
}

