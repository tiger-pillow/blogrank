import React from 'react';
import SubmitForm from '../components/SubmitForm';
import './Pages.css';

const SubmitFormPage = () =>{ 
  return (
    <div>
      <h3 className='GeneralText'>Tell us what blog you would like to include! </h3>
      <SubmitForm></SubmitForm>
    </div> 
  )
}
export default SubmitFormPage;