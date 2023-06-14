"use client"

import { useQuery } from "@tanstack/react-query"
import { DataTable } from "@/components/ui/data-table"
import { TaskRow, columns } from "@/components/tasks/columns"
import api from "@/config/axios-config"

export default function IndexPage() {
  const tasks = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await api.get("/tasks")
      return response.data as TaskRow[]
    },
  })

  return (
    <section className="container grid items-center justify-center gap-6 pb-6 pt-6 md:py-2">
      {tasks.data === undefined ? (
        "Loading..."
      ) : (
        <DataTable columns={columns} data={tasks.data} />
      )}
    </section>
  )
}
