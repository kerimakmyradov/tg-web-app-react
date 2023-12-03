import React, {useState, useEffect} from 'react';
import './Form.css';
import {useTelegram} from  '../../hooks/useTelegram'

const Form = () => {
  const[country, setCountry] = useState('')
  const[street, setStreet] = useState('')
  const[subject, setSubject] = useState('physical')

  const {tg} = useTelegram()

  useEffect(()=>{
    tg.MainButton.setParams({
      text: 'send details'
    })
  },[])

  useEffect(()=>{
    if(!street || !country){
      tg.MainButton.hide()
    }else{
      tg.MainButon.show()
    }
  },[country, street])

  const onChangeCountry=(e)=>{
    setCountry(e.target.value)
  }

  const onChangeStreet=(e)=>{
    setStreet(e.target.value)
  }

  const onChangeSubject=(e)=>{
    setSubject(e.target.value)
  }

  return (
    <div className={'form'}>
      <h3>Enter your details</h3>
      <input
        className={'input'}
        type='text'
        placeholder={'Country'}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={'input'}
        type='text'
        placeholder={'Street'}
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeSubject} className={'select'}>
        <option value={'legal'}>Company</option>
        <option value={'physical'}>Individual</option>
      </select>
    </div>
  );
};

export default Form;