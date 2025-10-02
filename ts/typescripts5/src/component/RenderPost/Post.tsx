import React, { useState } from 'react';

interface PostProps {
  text: string;
}

function Post({ text }: PostProps) {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  
  return (
    <div style={{ marginBottom: 20, border: '1px solid #ccc', padding: 10 }}>
      <p>{text}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
    </div>
  );
}

export default Post;