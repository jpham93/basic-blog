import React from 'react';
import { IonInput, IonTextarea, IonLabel, IonItem } from '@ionic/react'
import './NewBlog.css';

const NewBlog: React.FC = (props) => {
  return (
    <div className='container--max-width'>
      <h2>Create a New Blog</h2>
      <form>
        <IonItem class='item--border-round'>
          <IonLabel position='floating'>Title</IonLabel>
          <IonInput />
        </IonItem>
        <IonItem class='item--border-round'>
          <IonLabel position='floating'>Content</IonLabel>
          <IonTextarea />
        </IonItem>
      </form>
    </div>
  );
};

export default NewBlog;
