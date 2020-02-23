import React, { useState } from 'react';
import { IonInput, IonTextarea, IonLabel, IonItem, IonButton } from '@ionic/react'
import './NewBlog.css';

const NewBlog: React.FC = (props) => {
  const [title, setTitle] = useState<string | number | null | undefined>('');
  const [content, setContent] = useState<string | number | null | undefined>('');

  /**
   * @TODO - map correct value inputs to setters...
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLIonInputElement>) => {
    const {name, value} = e.target;
    name === 'title' ? setTitle(value) : setContent(value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //@TODO - payload
    console.log(`Title: ${ title }\nContent: ${ content }`);

    // reset values
    setTitle('');
    setContent('');
  };

  return (
    <div className='container--max-width'>
      <h2>Create a New Blog</h2>
      <form onSubmit={ handleSubmit }>
        <IonItem class='item--border-round'>
          <IonLabel position='floating'>Title</IonLabel>
          <IonInput
            name='title'
            type='text'
            value={ title }
            onInput={ handleChange }
          />
        </IonItem>
        <IonItem class='item--border-round'>
          <IonLabel position='floating'>Content</IonLabel>
          <IonTextarea/>
        </IonItem>
        <IonButton type='submit'>Submit</IonButton>
      </form>
    </div>
  );
};

export default NewBlog;
