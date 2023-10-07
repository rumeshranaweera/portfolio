import Email from "@/components/email";

export default function Home() {
  return (
    <main className="h-[200vh] mt-32 container mx-auto">
      <span
        className="text-9xl -z-50 select-none absolute top-16 left-0 md:text-[150px] lg:text-[200px] font-extrabold text-opacity-5 text-black"
        style={{ WebkitWritingMode: "vertical-rl" }}
      >
        Rumesh Ranaweera
      </span>
      <h1 className="text-5xl md:text-7xl text-center font-bold my-10">
        Rumesh Ranaweera
      </h1>
      <div>
        <Email />
      </div>
    </main>
  );
}
