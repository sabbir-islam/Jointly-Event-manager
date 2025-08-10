import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("blogData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Blog</h1>
            
            <div className="space-y-6">
                {data.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow p-6">
                        <img 
                            src={post.cover} 
                            alt={post.title}
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center">
                                <img 
                                    src={post.author.avatar} 
                                    alt={post.author.name}
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <span>{post.author.name}</span>
                            </div>
                            <span>{post.readingMinutes} min read</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;