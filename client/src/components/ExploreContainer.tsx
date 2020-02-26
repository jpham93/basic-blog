import React from 'react';
import './ExploreContainer.css';
import NewBlog from "./NewBlog/NewBlog";
import Blogs from "./Blogs/Blogs";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({name}) => {

  let component: JSX.Element;

  switch(name) {
    case 'Blogs':
      component = <Blogs />;
      break;
    case 'NewBlog':
      component = <NewBlog />;
      break;
    default:
      component =
      <p>
        Explore<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
        UI Components</a>
      </p>;
  }

  return (
    <div className="container">
      <strong>{ name }</strong>
      { component }
    </div>
  );
};

export default ExploreContainer;
