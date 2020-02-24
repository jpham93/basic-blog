import React, { FormEvent, useState } from 'react';
import { IonInput, IonTextarea, IonLabel, IonItem, IonButton } from '@ionic/react'
import './NewBlog.css';

const NewBlog: React.FC = (props) => {
  const [title, setTitle] = useState<string | null | undefined>('');
  const [content, setContent] = useState<string | null | undefined>('');

  /**
   * Handles change events for both inputs
   * @param e - React FormEvent to handle both input + text area
   */
  const handleChange = (
    e: FormEvent<HTMLIonTextareaElement | HTMLIonInputElement>
  ) => {
    const {name, value} = e.currentTarget;
    let stringVal = String(value);
    name === 'title' ? setTitle(stringVal) : setContent(stringVal);
  };

  /**
   * Handles submission for forms.
   * @param e - React
   */
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
            required
          />
        </IonItem>
        <IonItem class='item--border-round'>
          <IonLabel position='floating'>Content</IonLabel>
          <IonTextarea
            name='content'
            value={ content }
            onInput={ handleChange }
            required
          />
        </IonItem>
        <IonButton type='submit'>Submit</IonButton>
      </form>
    </div>
  );
};

export default NewBlog;
