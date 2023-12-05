import Sidebar from "@/components/Sidebar";
import React from "react";
import Profile from "@/components/Profile";
import Post from "@/components/Post";

export default async function Page({
  params: { userId }
}: {
  params: { userId: string }
}) {

  const children = (
    <>
      <Profile/>
      <div className="py-5 px-3 gap-2 flex flex-col">
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
      </div>
    </>
  )

  return (
    <Sidebar title={"Totsumaru"} children={children}/>
  )
}