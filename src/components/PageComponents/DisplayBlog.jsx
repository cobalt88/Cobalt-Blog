import { useEffect } from 'react';

export function DisplayBlog({ post }) {
  useEffect(() => {
    console.log('DisplayBlog component mounted');
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-8">
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-md" />
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="text-gray-500 mt-2">Published on {post.date}</p>
        <p className="text-gray-700 mt-4">{post.description}</p>
        <p className="text-gray-700 mt-4">{post.content}</p>
        <div className="flex items-center mt-4">
          <img src={post.author.imageUrl} alt={post.author.name} className="w-8 h-8 rounded-full" />
          <div className="ml-2">
            <p className="text-gray-800 font-semibold">{post.author.name}</p>
            <p className="text-gray-500">{post.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}