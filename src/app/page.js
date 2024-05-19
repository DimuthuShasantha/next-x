import Input from "@/components/Input";

export default function Home() {
  return (
    <div className="max-w-xl min-h-screen mx-auto border-l border-r">
      <div className="sticky top-0 z-50 px-3 py-2 bg-white border-b border-gray-200">
        <h2 className="text-lg font-bold sm:text-xl">Home</h2>
      </div>
      <Input />
    </div>
  );
}
