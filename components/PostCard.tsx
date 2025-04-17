import React from 'react';
import Image from 'next/image';
import { FaThumbsUp, FaComment, FaShare, FaEllipsisV } from 'react-icons/fa';

interface PostCardProps {
  post: {
    id: number;
    author: string;
    location: string;
    timeAgo: string;
    content: string;
    likes: number;
    comments: number;
    shares: number;
    tags: string[];
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-100">
      {/* Post header */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <Image 
              src="/profile-placeholder.jpg" 
              alt={post.author} 
              width={48} 
              height={48} 
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">{post.author}</h3>
            <p className="text-sm text-gray-500">{post.timeAgo} | {post.location}</p>
          </div>
        </div>
        <button className="text-gray-500">
          <FaEllipsisV className="h-5 w-5" />
        </button>
      </div>
      
      {/* Post image */}
      <div className="w-full h-80 relative">
        <Image 
          src="/handshake-meeting.jpg" 
          alt="Post image" 
          fill
          className="object-cover"
        />
      </div>
      
      {/* Post content */}
      <div className="p-4">
        <p className="text-base mb-3">{post.content}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-sm bg-gray-100 px-3 py-1 rounded">{tag}</span>
          ))}
        </div>
        
        {/* Post stats */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FaThumbsUp className="h-4 w-4 mr-1" />
            <span>{post.likes} suka</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <FaComment className="h-4 w-4 mr-1" />
              <span>{post.comments} komentar</span>
            </div>
            <div className="flex items-center">
              <FaShare className="h-4 w-4 mr-1" />
              <span>{post.shares} kali dibagikan</span>
            </div>
          </div>
        </div>
        
        {/* Post actions - removed border-t and changed to rounded buttons */}
        <div className="flex gap-2">
          <button className="flex-1 flex justify-center items-center gap-2 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <FaThumbsUp className="h-4 w-4" />
            <span>Suka</span>
          </button>
          <button className="flex-1 flex justify-center items-center gap-2 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <FaComment className="h-4 w-4" />
            <span>Komentar</span>
          </button>
          <button className="flex-1 flex justify-center items-center gap-2 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <FaShare className="h-4 w-4" />
            <span>Berbagi</span>
          </button>
        </div>
      </div>
    </div>
  );
}