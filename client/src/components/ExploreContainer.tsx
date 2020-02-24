import React from 'react';
import './ExploreContainer.css';
import NewBlog from "./NewBlog/NewBlog";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({name}) => {
  return (
    <div className="container">
      <strong>{ name }</strong>
      {
        name === 'NewBlog'
          ? <NewBlog />
          : <p>
            Explore<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
            UI Components</a>
          </p>
      }
    </div>
  );
};

export default ExploreContainer;
