"use client"

import { useQuery } from "@tanstack/react-query"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Label, LabelCard } from "@/components/labels/label-card"
import axs from "@/config/axios-config"

export default function LabelsPage() {
  const labels = useQuery({
    queryKey: ["labels"],
    queryFn: async () => {
      const response = await axs.get("/labels")
      return response.data as Label[]
    },
  })

  return (
    <section className="container grid items-center justify-center gap-6 pb-6 pt-6 md:py-2">
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {labels.data === undefined
                  ? "Loading..."
                  : labels.data?.map((p) => (
                      <LabelCard id={p.id} name={p.name} />
                    ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
