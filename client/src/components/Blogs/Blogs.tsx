import React, { useEffect, useState } from 'react';
import { IonList, IonItem, IonListHeader, IonTitle, IonChip } from '@ionic/react';
import { stringify } from "querystring";

interface Blogs {
  __v: number,
  _id: string,
  title: string,
  content: string
};

/**
 * Component to display all props
 * @param props
 * @constructor
 */
const Blogs: React.FC = (props) => {

  const [blogs, setBlogs] = useState<[Blogs]>([{title: 'No Blogs to Display', content: '', __v: 0, _id: '0'}]);
  const [err, setErr] = useState<string | null>(null);

  const getBlogsEndpoint = `http://localhost:3000/blog`;

  useEffect(() => {
    fetch(getBlogsEndpoint)
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
      })
      .catch(err => {
        console.log(err);
        setErr(stringify(err));
      });

    return
  }, []);

  const blogsDisplay: JSX.Element[] = blogs.map(blog => {
    console.log(blog);
    return (<IonItem>
    </IonItem>);
  });

  return (
    <div>
      <IonList>
        <IonListHeader>Recent</IonListHeader>
        {
          err
            ? <IonChip color='danger'>{ err }</IonChip>
            : blogs.map(blog => (
              <IonItem key={blog._id}>
                <IonTitle>{blog.title}</IonTitle>
                <p>{blog.content}</p>
              </IonItem>
            ))
        }
      </IonList>
    </div>
  );
};

export default Blogs;
