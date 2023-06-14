"use client"

import { useQuery } from "@tanstack/react-query"
import { PlusCircle } from "lucide-react"

import api from "@/config/axios-config"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Project } from "../projects/project-card"
import { SelectProject } from "../projects/select-project"
import { SelectPriority } from "./select-priority"
import { SelectStatus } from "./select-status"

export function NewTaskButton() {
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get("/projects")
      return response.data as Project[]
    },
  })

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="relative">
          <PlusCircle className="mr-3" />
          Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Learn CSS positioning" />
          </div>
        </div>

        <div>Subtasks here</div>
        <div>Subtasks here</div>
        <div>Subtasks here</div>
        <div>Subtasks here</div>

        <div className="grid grid-cols-3 gap-4">
          {projects.data === undefined ? null : (
            <SelectProject projects={projects.data} />
          )}
          <SelectStatus />
          <SelectPriority />
        </div>

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
