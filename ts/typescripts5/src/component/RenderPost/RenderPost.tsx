import React from 'react';
import Post from './Post';

function RenderPost() {
  const posts: string[] = [
    "Học ReactJS có khó không?",
    "Props và State là gì?",
    "Lập trình web có vui không?",
  ];
  
  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 4: Like/Dislike Post</h2>
      {posts.map((text, index) => (
        <Post key={index} text={text} />
      ))}
    </div>
  );
}

export default RenderPost;