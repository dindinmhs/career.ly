"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoMdCamera } from 'react-icons/io';
import { FaLink, FaListAlt, FaTimes, FaPaperPlane } from 'react-icons/fa';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostModal({ isOpen, onClose }: PostModalProps) {
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image 
                src="/profile-placeholder.jpg" 
                alt="John Doe" 
                width={40} 
                height={40} 
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">New York, NY</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4">
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <textarea
              placeholder="Apa yang ingin kamu obrolin?"
              className="w-full h-32 resize-none border-0 focus:ring-0 focus:outline-none text-lg"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full">
                <BsEmojiSmile className="w-6 h-6" />
              </button>
              <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full">
                <IoMdCamera className="w-6 h-6" />
              </button>
              <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full">
                <FaLink className="w-6 h-6" />
              </button>
              <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full">
                <FaListAlt className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Tags Section */}
          <div className="pt-4">
            <h4 className="font-medium mb-2">Tag</h4>
            <p className="text-sm text-gray-500 mb-3">
              Berikan tag yang relevan setidaknya 5 dengan topik yang ingin kamu obrolin.
            </p>
            
            {/* Tag List */}
            <div className="flex flex-wrap gap-2">
              <button className="border border-blue-500 text-blue-500 text-sm px-4 py-1 rounded-full flex items-center gap-1">
                <span>Tambah tag</span>
                <span>+</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button className="bg-white text-blue-500 border border-blue-500 rounded-full py-2 px-6 font-medium hover:bg-blue-50 flex items-center justify-center">
            <span className="mr-1">Posting</span>
            <FaPaperPlane className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}