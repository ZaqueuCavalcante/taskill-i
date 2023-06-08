import { TaskRow, columns } from "@/components/tasks-table/columns"
import { DataTable } from "@/components/ui/data-table"

async function getData(): Promise<TaskRow[]> {
  return [
    {
      id: 1,
      title: "Finish this project",
      status: "doing",
      priority: "low",
    },
    {
      id: 2,
      title: "Deploy API on GCP",
      status: "todo",
      priority: "high",
    },
    {
      id: 3,
      title: "Deploy UI on Vercel",
      status: "todo",
      priority: "medium",
    },
    {
      id: 4,
      title: "Learn how to build any layout using CSS (and Tailwind CSS)",
      status: "todo",
      priority: "medium",
    },
    {
      id: 5,
      title: "Read React-Query Docs for data fetch",
      status: "todo",
      priority: "medium",
    },
    {
      id: 6,
      title: "Create Taskill-i project",
      status: "done",
      priority: "medium",
    },
    {
      id: 7,
      title: "Add pagination to tasks table",
      status: "todo",
      priority: "medium",
    },
    {
      id: 8,
      title: "Add custom sorting to tables",
      status: "todo",
      priority: "medium",
    },
    {
      id: 9,
      title: "Use Stripe for sale Premium Access",
      status: "todo",
      priority: "high",
    },
    {
      id: 10,
      title: "Create Premium Plan and features",
      status: "todo",
      priority: "high",
    },
    {
      id: 11,
      title: "Add login with Google",
      status: "todo",
      priority: "high",
    },
    {
      id: 12,
      title: "Add integration with Google Calendar",
      status: "todo",
      priority: "high",
    },
    {
      id: 13,
      title: "Add Task context card and sub-tasks list",
      status: "todo",
      priority: "high",
    },
    {
      id: 14,
      title: "Add TODO-DOING-DONE layout and drag cards feature",
      status: "todo",
      priority: "high",
    },
  ]
}

export default async function IndexPage() {
  const data = await getData()

  return (
    <section className="container grid items-center justify-center gap-6 pb-6 pt-6 md:py-2">
      <DataTable columns={columns} data={data} />
    </section>
  )
}
