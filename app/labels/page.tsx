export default function LabelsPage() {

  return (
    <section className="container grid items-center justify-center gap-6 pb-6 pt-6 md:py-2">
      <div>{process.env.NEXT_PUBLIC_API_URL}</div>
    </section>
  )
}
