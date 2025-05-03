import { ProjectListCardProps } from "./ProjectListCard.type";
import Link from "next/link";

export default function ProjectListCard({ projects }: ProjectListCardProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {projects?.length > 0 ? projects.map((project, index) => (
                <Link href={project.link} key={index}>
                    <div className="border border-[#adadad] p-4 rounded-lg w-full max-w-xs">
                        <h2 className="text-[#adadad] font-bold text-lg">{project.name}</h2>
                        <p className="text-[#adadad] mt-2 text-sm">{project.description}</p>
                        <span className="text-[#adadad] mt-4 block text-xs">Discover Arrow</span>
                    </div>
                </Link>
            )) : null}
        </div>
    );
}