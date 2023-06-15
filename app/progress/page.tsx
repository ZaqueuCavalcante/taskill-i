import { NewTaskForm } from "@/components/progress/new-task-form"
import { ProfileForm } from "@/components/progress/profile-form"

export default function ProgressPage() {
  return (
    <section className="container grid items-center justify-center gap-6 pb-6 pt-6 md:py-2">
      {/* <NewTaskForm/> */}
      <ProfileForm />
    </section>
  )
}
