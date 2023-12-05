import Sidebar from "@/components/Sidebar";
import Post from "@/components/Post";

export default function Page() {
  return (
    <Sidebar title={"Home"} children={
      <div className="py-10 px-3 gap-2 flex flex-col">
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
        <Post
          id={"2"}
          author={{
            id: "totsumaru",
            name: "John Doe",
            avatarUrl: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          }}
          content={`Hello World\nHello World`}
          imageUrls={["/img.png", "/img.png", "/img.png"]}
          createdAt={"2021-03-01T12:34:56.789Z"}
        />
      </div>
    }/>
  )
}