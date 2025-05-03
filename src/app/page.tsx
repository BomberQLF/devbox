import ProjectListCard from "@/components/ProjectListCard/ProjectListCard";

export default function Home() {
  const projects = [
    {
      name: "Character Count",
      description: "Analyzes your text in real-time.",
      link: "/charactercount",
    },
    {
      name: "Project 2",
      description: "Description of project 2",
      link: "/project2",
    },
    {
      name: "Project 3",
      description: "Description of project 3",
      link: "/project3",
    },
    {
      name: "Project 4",
      description: "Description of project 4",
      link: "/project4",
    },
    {
      name: "Project 5",
      description: "Description of project 5",
      link: "/project5",
    },
    {
      name: "Project 6",
      description: "Description of project 6",
      link: "/project6",
    }
  ];

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16">
      <section className="flex flex-col items-center w-full max-w-6xl">
        <div className="flex flex-col justify-center items-start w-full mb-12">
          <h1 className="text-[#adadad] font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl">
            Devbox - Way To Success
          </h1>
        </div>
        <div className="w-full">
          <ProjectListCard projects={projects} />
        </div>
      </section>
    </main>
  );
}