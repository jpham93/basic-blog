import React, { FormEvent, useState } from 'react';
import { IonInput, IonTextarea, IonLabel, IonItem, IonButton, IonChip } from '@ionic/react'
import './NewBlog.css';

interface Blog {
  title: string | null | undefined,
  content: string | null | undefined
}

const NewBlog: React.FC = (props) => {
  const [title, setTitle] = useState<string | null | undefined>('');
  const [content, setContent] = useState<string | null | undefined>('');
  const [submitMessage, setMessage] = useState<{ success: string | undefined, error: string | undefined } | null | undefined>(null);

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
    const payload: Blog = { title, content };

    // POST to server
    const newBlogEndpoint = `http://localhost:3000/blog/new`;
    fetch(newBlogEndpoint, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then(message => {
        setMessage(message);
      })
      .catch(err => {
        console.log(err);
      });

    // reset values
    setTitle('');
    setContent('');
  };


  let message = null;
  if (submitMessage !== null && submitMessage) {
    message = submitMessage.success !== undefined
      ? <IonChip color='success' outline>{ submitMessage.success }</IonChip>
      : <IonChip color='danger' outline>{ submitMessage.error }</IonChip>
  }

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
      { message }
    </div>
  );
};

export default NewBlog;
