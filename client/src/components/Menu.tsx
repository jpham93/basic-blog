import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { documentTextOutline, documentTextSharp, addCircleOutline, addCircleSharp, logOutOutline, logOutSharp } from 'ionicons/icons';
import './Menu.css';

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
}

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Blogs',
    url: '/page/Blogs',
    iosIcon: documentTextOutline,
    mdIcon: documentTextSharp
  },
  {
    title: 'New Blog',
    url: '/page/NewBlog',
    iosIcon: addCircleOutline,
    mdIcon: addCircleSharp
  },
  {
    title: 'Log Out',
    url: '/page/Logout',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp
  }
];

const Menu: React.FunctionComponent<MenuProps> = ({selectedPage}) => {

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Basic Blog</IonListHeader>
          <IonNote>Hi James</IonNote>
          { appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={ index } autoHide={ false }>
                <IonItem className={ selectedPage === appPage.title ? 'selected' : '' } routerLink={ appPage.url }
                         routerDirection="none" lines="none" detail={ false }>
                  <IonIcon slot="start" icon={ appPage.iosIcon }/>
                  <IonLabel>{ appPage.title }</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          }) }
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(Menu);
