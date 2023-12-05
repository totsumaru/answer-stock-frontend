import Image from "next/image";

export default function Profile() {
  return (
    <div className="shadow border-b-1">
      <div className="relative">
        {/* ヘッダー画像 */}
        <Image
          className="h-32 w-full object-cover lg:h-48"
          src="/img.png"
          alt="ヘッダー画像"
          width={500}
          height={200}
        />
        <div className="ml-5 absolute bottom-0 transform translate-y-1/2">
          {/* アイコン */}
          <Image
            className="h-36 w-36 rounded-full border-4 border-white"
            src="/img.png"
            alt="プロフィールアイコン"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="pb-5 pt-16 px-4 sm:px-6 lg:px-8">
        {/* プロフィールの内容 */}
        <div className="mt-5">
          <h3 className="text-xl font-bold leading-8 tracking-tight">
            ユーザー名
          </h3>
          <div className="text-sm text-gray-400">
            @ユーザーID
          </div>
          <div className="mt-4 space-y-6 text-left">
            <p className="text-sm leading-7 text-gray-700">
              ここにプロフィールの説明文やその他の情報を入れます。これはサンプルテキストですので、実際の内容に応じて変更してください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}