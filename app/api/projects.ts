import { prisma } from "@/lib/prisma";

export async function GET() {
  const projects = await prisma.project.findMany({
    include: {
      property: true,
      marketSummary: true,
    },
  });

  return Response.json(projects);
}
