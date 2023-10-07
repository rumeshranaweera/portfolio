import Email from "@/components/email";

export default function Home() {
  return (
    <main className="h-[200vh] mt-32 container mx-auto">
      <h1 className="text-5xl md:text-7xl text-center font-bold my-10">
        Rumesh Ranaweera
      </h1>
      <div>
        <Email />
      </div>
    </main>
  );
}
