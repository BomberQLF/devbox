import ProjectListCard from "@/(Components)/ProjectListCard/ProjectListCard";

export default function Home() {
  const projects = [
    {
      name: "Project 1",
      description: "Description of project 1",
      link: "/project1",
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
        {/* Titre centré et aligné */}
        <div className="flex flex-col justify-center items-start w-full mb-12">
          <h1 className="text-[#adadad] font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl">
            Devbox - Way To Success
          </h1>
        </div>
        {/* Liste des projets */}
        <div className="w-full">
          <ProjectListCard projects={projects} />
        </div>
      </section>
    </main>
  );
}