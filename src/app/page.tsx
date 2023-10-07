import Email from "@/components/email";

export default function Home() {
  return (
    <main className="h-[200vh] mt-32">
      <span
        className="text-9xl -z-50 select-none absolute top-16 left-0 md:text-[150px] lg:text-[200px] font-extrabold text-opacity-10 text-black"
        style={{ WebkitWritingMode: "vertical-rl" }}
      >
        Rumesh Ranaweera
      </span>
      <div>
        <Email />
      </div>
    </main>
  );
}
