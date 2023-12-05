import Sidebar from "@/components/Sidebar";
import React from "react";
import Post from "@/components/Post";

export default async function Page({
  params: { postId }
}: {
  params: { postId: string }
}) {
  const children = (
    <div className="px-5 flex flex-col items-center my-5">
      <Post
        id={"1"}
        author={{
          id: "totsumaru",
          name: "John Doe",
          avatarUrl: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        }}
        content={`Hello World\nHello World`}
        imageUrls={["/img.png"]}
        createdAt={"2021-03-01T12:34:56.789Z"}
      />

      <div className="w-full lg:max-w-lg my-5">
        <h2 className="text-lg font-bold">返信</h2>
      </div>

      <Post
        id={"1"}
        author={{
          id: "totsumaru",
          name: "John Doe",
          avatarUrl: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        }}
        content={`Hello World\nHello World`}
        imageUrls={[]}
        createdAt={"2021-03-01T12:34:56.789Z"}
      />
    </div>
  )

  return (
    <Sidebar title={"投稿"} children={children}/>
  )
}
