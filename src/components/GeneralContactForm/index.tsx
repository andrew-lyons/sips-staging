import React, { Fragment, ReactNode, useState } from 'react';
import RightArrow from '../../assets/images/arrow-right.svg';
import './index.scss';

export interface GeneralContactFormProps {
    headBlock?: ReactNode;
    includeName?: boolean;
    includeEmail?: boolean;
    includePhone?: boolean;
    includeDetails?: boolean;
}

const GeneralContactForm: React.FC<GeneralContactFormProps> = ({ headBlock, includeName = true, includeEmail = true, includePhone = true, includeDetails = true }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [details, setDetails] = useState('');
    const [errors, setErrors] = useState({ name: '', phone: '', email: '', details: '', response: '' });
    const [response, setResponse] = useState('');

    // behold, a monstrosity
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailValidator = (emailAddress: string) => {
        return emailAddress.toLowerCase().match(reg);
    }
    
    const sendEmail = () => {
        let errorsCt = 0;

        if (includeName) {
            // don't check for errors if we didn't include this field
            // if we did include the field, it is required
            if (!name.length) {
                setErrors((oldState) => { return { ...oldState, name: 'Please enter a name.' }});
                errorsCt += 1;
            }
            else {
                setErrors((oldState) => { return { ...oldState, name: '' }})
            }
        }

        if (includePhone) {
            // just in case
            const strPhone = String(phone);
            if (!strPhone.length) {
                setErrors((oldState) => { return { ...oldState, phone: 'Please enter a phone number.' }});
                errorsCt += 1;
            }
            else {
                setErrors((oldState) => { return { ...oldState, phone: '' }})
            }
        }

        if (!email.length) {
            setErrors((oldState) => { return { ...oldState, email: 'Please enter an email.' }});
            errorsCt += 1;
        }
        else {
            // email was entered, do validation
            if (!emailValidator(email)) {
                setErrors((oldState) => { return { ...oldState, email: 'Please enter a valid email.' }});
                errorsCt += 1;
            }
            else {
                setErrors((oldState) => { return { ...oldState, email: '' }})
            }
        }

        if (!details.length) {
            setErrors((oldState) => { return { ...oldState, details: 'Please add some context for your inquiry.' }});
            errorsCt += 1;
        }
        else {
            setErrors((oldState) => { return { ...oldState, details: '' }})
        }

        // we had errors
        if (errorsCt) return
        else {
            // no errors, send the email
            const options = {
                method: 'POST',
                body: JSON.stringify({ name, email, phone, details }),
                headers: { 'Content-Type': 'application/json' }
            };

            fetch('https://sips-email-server.vercel.app/api/emails', options)
            .then(response => response.text())
            .then(data => setResponse(data))
            .catch(e => setErrors((oldState) => { return { ...oldState, response: e }}));
        }
    }
    
    return (
        <section className='generalcontactform'>
            <form action="submit">
                { headBlock }

                { 
                    includeName
                    ? (
                        <Fragment>
                            <input className={`${errors.name.length ? 'has-error' : ''}`} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder='Name' />
                            <p className={`input-error ${errors.name.length ? 'input-error-active' : ''}`}>{ errors.name }</p>
                        </Fragment>
                    )
                    : null
                }

                {
                    includeEmail
                    ? (
                        <Fragment>
                            <input className={`${errors.email.length ? 'has-error' : ''}`} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder='Email' />
                            <p className={`input-error ${errors.email.length ? 'input-error-active' : ''}`}>{ errors.email }</p>
                        </Fragment>
                    )
                    : null
                }

                {
                    includePhone
                    ? (
                        <Fragment>
                            <input className={`${errors.phone.length ? 'has-error' : ''}`} onChange={(e) => setPhone(e.target.value)} name="phone" type="tel" placeholder='Phone #' />
                            <p className={`input-error ${errors.phone.length ? 'input-error-active' : ''}`}>{ errors.phone }</p>
                        </Fragment>
                    )
                    : null
                }

                {
                    includeDetails
                    ? (
                        <Fragment>
                            <textarea className={`${errors.details.length ? 'has-error' : ''}`} onChange={(e) => setDetails(e.target.value)} name="details" placeholder='Details...' />
                            <p className={`input-error ${errors.details.length ? 'input-error-active' : ''}`}>{ errors.details }</p>
                        </Fragment>
                    )
                    : null
                }

                { response.length ? <p className='request-response'>{ response }</p> : null }

                <a className='arrow-cta' onClick={sendEmail}>
                    Send
                    <img src={RightArrow} />
                </a>
            </form>
        </section>
    )
}

export default GeneralContactForm;