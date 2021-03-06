/**
*
* ConctactList
*
*/
/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact';

// import './ContactListScript';
import './ContactList.scss';
import GroupSelectList from '../GroupSelectList';

function ContactList(props) {
  const { contacts, groups } = props;
  const contactItems = contacts.map((contact) => <Contact key={contact._id} contact={contact} groups={groups} />);

  return (
    <div>
      <ul className="mdc-list contact-list">
        <li className="mdc-list-item add-contact">
          <span className="mdc-list-item__text">
            Add Contact
          </span>
        </li>
        {contactItems}
      </ul>
      <aside id="add-contact-dialog" className="mdc-dialog" role="alertdialog" aria-labelledby="add-contact-dialog-label" aria-describedby="add-contact-dialog-description">
        <div className="mdc-dialog__surface">
          <header className="mdc-dialog__header">
            <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
              Add a new contact
            </h2>
          </header>
          <section id="my-mdc-dialog-description" className="mdc-dialog__body">
            <div className="mdc-text-field mdc-text-field--outlined">
              <input type="text" id="name" className="mdc-text-field__input name" />
              <label htmlFor="name" className="mdc-floating-label">Name of Contact</label>
              <div className="mdc-notched-outline">
                <svg>
                  <path className="mdc-notched-outline__path" />
                </svg>
              </div>
              <div className="mdc-notched-outline__idle"></div>
            </div>
            <div className="mdc-text-field mdc-text-field--outlined">
              <input type="email" id="email" className="mdc-text-field__input name" />
              <label htmlFor="email" className="mdc-floating-label">Email of Contact</label>
              <div className="mdc-notched-outline">
                <svg>
                  <path className="mdc-notched-outline__path" />
                </svg>
              </div>
              <div className="mdc-notched-outline__idle"></div>
            </div>
            <GroupSelectList groups={groups} />
          </section>
          <footer className="mdc-dialog__footer">
            <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Add</button>
          </footer>
        </div>
        <div className="mdc-dialog__backdrop"></div>
      </aside>
      {/* Edit Contact */}
      <aside id="edit-contact-dialog" className="mdc-dialog" role="alertdialog" aria-labelledby="edit-contact-label" aria-describedby="edit-contact-description">
        <div className="mdc-dialog__surface">
          <header className="mdc-dialog__header">
            <h2 id="edit-contact-label" className="mdc-dialog__header__title">
              Edit Contact
            </h2>
          </header>
          <section id="edit-contact-description" className="mdc-dialog__body">
            <div className="hidden id" />
            <div className="mdc-text-field mdc-text-field--outlined">
              <input type="text" id="name" className="mdc-text-field__input name" />
              <label htmlFor="name" className="mdc-floating-label mdc-floating-label--float-above">Name of Contact</label>
              <div className="mdc-notched-outline mdc-notched-outline--notched">
                <svg>
                  <path className="mdc-notched-outline__path" />
                </svg>
              </div>
              <div className="mdc-notched-outline__idle"></div>
            </div>
            <div className="mdc-text-field mdc-text-field--outlined">
              <input type="email" id="email" className="mdc-text-field__input email" />
              <label htmlFor="email" className="mdc-floating-label mdc-floating-label--float-above">Email of Contact</label>
              <div className="mdc-notched-outline mdc-notched-outline--notched">
                <svg>
                  <path className="mdc-notched-outline__path" />
                </svg>
              </div>
              <div className="mdc-notched-outline__idle"></div>
            </div>
            <GroupSelectList groups={groups} />
          </section>
          <footer className="mdc-dialog__footer">
            <button type="button" className="mdc-button mdc-dialog__footer__button button-delete"><i className="material-icons mdc-button__icon">delete</i>Delete</button>
            <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Edit</button>
          </footer>
        </div>
        <div className="mdc-dialog__backdrop"></div>
      </aside>
      {/* END Edit Contact */}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  groups: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default ContactList;
