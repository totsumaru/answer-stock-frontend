import Sidebar from "@/components/Sidebar";

export default async function Page({
  params: { userId }
}: {
  params: { userId: string }
}) {
  const content = () => {
    return (
      <>
        hello
      </>
    )
  }

  return (
    <Sidebar
      title={"Totsumaru"}
      children={content()}
    />
  )
}