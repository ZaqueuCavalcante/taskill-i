"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TaskTableActions } from "./task-table-actions"

export type TaskRow = {
  id: number
  title: string
  status: "Todo" | "Doing" | "Done"
  priority: "Low" | "Medium" | "High"
}

export const columns: ColumnDef<TaskRow>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return <div className="text-center font-semibold">{status}</div>
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string
      return <div className="text-center font-bold">{priority}</div>
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <TaskTableActions />
      )
    },
  },
]
