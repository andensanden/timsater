import React from 'react';
import './App.css';

const images = [
  {
    id: 1,
    src: 'https://via.placeholder.com/600x400?text=Image+1',
    alt: 'Description of Image 1',
    header: 'Adventure in the Mountains'
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/600x400?text=Image+2',
    alt: 'Description of Image 2',
    header: 'Sunset by the Beach'
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/600x400?text=Image+3',
    alt: 'Description of Image 3',
    header: 'Exploring the City'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Travel Photo Diary</h1>
      </header>
      <main>
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.src} alt={image.alt} className="image" />
            <h2>{image.header}</h2>
          </div>
        ))}
      </main>
    </div>
  );
}

