import React from 'react';
import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

// 仮の返信数といいね数
const replyCount = 10; // 例えば、これはpropsから取得したり、状態管理から取得したりすることができます
const likeCount = 5; // 同上

type Props = {
  id: string;
  author: {
    id: string
    name: string;
    avatarUrl: string;
  };
  content: string;
  imageUrls: string[];
  createdAt: string;
}

export default function Post(props: Props) {
  // 画像が1枚の場合はフル幅を使い、複数枚の場合は画像をグリッドに配置する
  const imagesGridClass = props.imageUrls.length > 1
    ? 'grid grid-cols-2 gap-2'
    : 'flex flex-col';

  return (
    <div className="bg-white px-4 py-5 sm:px-6 rounded-md shadow md:max-w-lg">
      <div className="flex space-x-3">
        <Link href={`/user/${props.author.id}`}>
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={props.author.avatarUrl}
              alt={`${props.author.name}'s avatar`}
            />
          </div>
        </Link>
        <div className="min-w-0 flex-1">
          <Link href={`/user/${props.author.id}`}>
            <p className="text-sm font-semibold text-gray-900">
              {props.author.name}
            </p>
          </Link>
          <p className="text-xs text-gray-500">
            <time dateTime={new Date(props.createdAt).toISOString()}>
              {new Date(props.createdAt).toLocaleDateString()} at {new Date(props.createdAt).toLocaleTimeString()}
            </time>
          </p>
        </div>
      </div>

      <Link href={`/post/${props.id}`}
            className="block p-5 mt-4 text-sm text-gray-700 w-full bg-yellow-50 rounded-md"
            style={{ whiteSpace: 'pre-wrap' }}
      >
        {props.content}
      </Link>

      <div className={`${imagesGridClass} mt-4`}>
        {props.imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Content image ${index + 1}`}
            className={props.imageUrls.length > 1 ? 'w-full h-32 object-cover rounded-md' : 'w-full rounded-md'}
          />
        ))}
      </div>

      {/* アイコンを表示する部分 */}
      <div className="flex items-center mt-4">
        <div className="flex items-center">
          <ChatBubbleOvalLeftIcon className="h-4 w-4 text-gray-400 hover:text-gray-700 cursor-pointer"/>
          <span className="text-sm ml-2 text-gray-500">{replyCount}</span>
        </div>
        <div className="flex items-center ml-5">
          <HeartIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 cursor-pointer"/>
          <span className="text-sm ml-2 text-gray-500">{likeCount}</span>
        </div>
      </div>

    </div>
  );
}
