"use client"

import { useQuery } from "@tanstack/react-query"
import { DataTable } from "@/components/ui/data-table"
import { TaskRow, columns } from "@/components/tasks-table/columns"

import axios from "axios"
axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}`
axios.defaults.headers.common["Authorization"] = `${process.env.NEXT_PUBLIC_JWT}`

export default function IndexPage() {
  const tasks = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get("/tasks")
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

const fakeData: TaskRow[] = [
  {
    id: 1,
    title: "Finish this project",
    status: "Doing",
    priority: "Low",
  },
  {
    id: 2,
    title: "Deploy API on GCP",
    status: "Todo",
    priority: "High",
  },
  {
    id: 3,
    title: "Deploy UI on Vercel",
    status: "Todo",
    priority: "Medium",
  },
  {
    id: 4,
    title: "Learn how to build any layout using CSS (and Tailwind CSS)",
    status: "Todo",
    priority: "Medium",
  },
  {
    id: 5,
    title: "Read React-Query Docs for data fetch",
    status: "Todo",
    priority: "Medium",
  },
  {
    id: 6,
    title: "Create Taskill-i project",
    status: "Done",
    priority: "Medium",
  },
  {
    id: 7,
    title: "Add pagination to tasks table",
    status: "Todo",
    priority: "Medium",
  },
  {
    id: 8,
    title: "Add custom sorting to tables",
    status: "Todo",
    priority: "Medium",
  },
  {
    id: 9,
    title: "Use Stripe for sale Premium Access",
    status: "Todo",
    priority: "High",
  },
  {
    id: 10,
    title: "Create Premium Plan and features",
    status: "Todo",
    priority: "High",
  },
  {
    id: 11,
    title: "Add login with Google",
    status: "Todo",
    priority: "High",
  },
  {
    id: 12,
    title: "Add integration with Google Calendar",
    status: "Todo",
    priority: "High",
  },
  {
    id: 13,
    title: "Add Task context card and sub-tasks list",
    status: "Todo",
    priority: "High",
  },
  {
    id: 14,
    title: "Add TODO-DOING-DONE layout and drag cards feature",
    status: "Todo",
    priority: "High",
  },
]
