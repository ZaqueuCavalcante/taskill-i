import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Project } from "./project-card"

interface SelectProjectProps {
  projects: Project[]
}

export function SelectProject({ projects }: SelectProjectProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="project">Project</Label>
      <Select>
        <SelectTrigger id="project">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((p) => (
            <SelectItem value={p.id.toString()}>{p.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
