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

const accountFormSchema = z.object({
  title: z.string(),
  project: z.string(),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

export function NewTaskForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
  })

  function onSubmit(data: AccountFormValues) {
    console.log(data)
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

        <FormField
          name="project"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project</FormLabel>
              <FormControl>
                <Input placeholder="DevOps" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}
