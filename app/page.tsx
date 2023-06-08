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
  ]
}

export default async function IndexPage() {
  const data = await getData()

  return (
    <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <DataTable columns={columns} data={data} />
    </section>
  )
}
