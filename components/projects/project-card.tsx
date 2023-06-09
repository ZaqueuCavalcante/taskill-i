"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  id: number
  name: string
}

export function ProjectCard({ id, name }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Project {id}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{name}</div>
      </CardContent>
    </Card>
  )
}

export type Project = {
  id: number
  name: string
}
