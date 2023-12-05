"use client"

import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";

type Props = {
  likeCount: number;
}

export default function LikeButton({ likeCount }: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(likeCount);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setCount(prevCount => isLiked ? prevCount - 1 : prevCount + 1);
  }

  return (
    <div className="flex items-center ml-5 text-red-500 hover:text-red-600 font-bold cursor-pointer"
         onClick={toggleLike}>
      {isLiked ? (
        <HeartIconFilled className="h-4 w-4"/>
      ) : (
        <HeartIcon className="h-4 w-4"/>
      )}
      <span className="text-sm ml-2">{count}</span>
    </div>
  )
}
