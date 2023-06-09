"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LabelCardProps {
  id: number
  name: string
}

export function LabelCard({ id, name }: LabelCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Label {id}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{name}</div>
      </CardContent>
    </Card>
  )
}

export type Label = {
  id: number
  name: string
}
