"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import * as z from "zod"

import api from "@/config/axios-config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/react-hook-form/form"

const newTaskFormSchema = z.object({
  title: z.string(),
})

type NewTaskFormValues = z.infer<typeof newTaskFormSchema>

export function NewTaskForm() {
  const form = useForm<NewTaskFormValues>({
    resolver: zodResolver(newTaskFormSchema),
  })

  const [title, setTitle] = useState("")

  const { mutate } = useMutation({
    mutationFn: async () => {
      const body = {
        title: title,
      }
      await api.post("/tasks", body)
    },
  })

  function onSubmit(data: NewTaskFormValues) {
    setTitle(data.title)
    console.log(data)
    mutate()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Learn CSS positioning" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}
