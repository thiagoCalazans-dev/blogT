import Image from "next/image";

export const Profile = () => {
  return (
    <section className="flex flex-col items-center gap-2 pt-4">
      <div className="w-52 h-52 relative border-teal-700 border-2 rounded-full">
        <Image
          className="rounded-full"
          src="https://github.com/thiagoCalazans-dev.png"
          layout="fill"
          alt="foto de profile do thiago"
        />
      </div>
      <h1 className="text-4xl font-extrabold text-teal-700 tracking-wide">Thiago Calazans</h1>
      <h2 className="text-2xl font-bold text-white tracking-wide">Desenvolvedor Front-End</h2>
      <p className="text-base text-zinc-200 max-w-[640px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti quasi ex minus animi dignissimos aspernatur amet iste deleniti tempora. Harum facilis temporibus porro quaerat commodi distinctio, et odio totam!</p>
      
    </section>
  );
};
