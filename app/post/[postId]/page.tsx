import Sidebar from "@/components/Sidebar";
import React from "react";
import Post from "@/components/Post";

export default async function Page({
  params: { postId }
}: {
  params: { postId: string }
}) {
  const children = (
    <div className="px-5 flex flex-col items-center mt-5">
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
      <div className="mt-2 gap-2">
        <h2 className="text-lg font-bold">返信</h2>
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
    </div>
  )

  return (
    <Sidebar title={"Totsumaru"} children={children}/>
  )
}
