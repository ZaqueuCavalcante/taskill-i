"use client"

import { useQuery } from "@tanstack/react-query"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Project, ProjectCard } from "@/components/projects/project-card"
import api from "@/config/axios-config"

export default function ProjectsPage() {
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get("/projects")
      return response.data as Project[]
    },
  })

  return (
    <section className="container grid items-center justify-center gap-6 pb-6 pt-6 md:py-2">
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {projects.data === undefined
                  ? "Loading..."
                  : projects.data?.map((p) => (
                      <ProjectCard id={p.id} name={p.name} />
                    ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
