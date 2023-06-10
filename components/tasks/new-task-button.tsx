"use client"

import { useQuery } from "@tanstack/react-query"
import { Plus } from "lucide-react"

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
import axs from "@/config/axios-config"

export function NewTaskButton() {
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await axs.get("/projects")
      return response.data as Project[]
    },
  })

  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm" className="relative">
          <Plus className="mr-2 h-4 w-4" />
          New Task
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

        <div className="grid grid-cols-3 gap-4">
          {projects.data === undefined ? (
            null
          ) : (
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
