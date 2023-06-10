"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/react-hook-form/form"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import axs from "@/config/axios-config"

const accountFormSchema = z.object({
  title: z.string(),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

export function NewTaskForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
  })

  const [title, setTitle] = useState('')

  const { mutate } = useMutation({
    mutationFn: async () => {
      const body = {
        title: title
      }
      await axs.post("/tasks", body)
    },
  })

  function onSubmit(data: AccountFormValues) {
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
