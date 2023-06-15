"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { Check, ChevronsUpDown, PlusCircle } from "lucide-react"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { useMutation } from "@tanstack/react-query"

import api from "@/config/axios-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/forms/form"

import { Project } from "../projects/project-card"
import { Command, CommandGroup, CommandItem } from "../ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { useState } from "react"

const profileFormSchema = z.object({
  title: z.string(),
  subtasks: z
    .array(
      z.object({
        value: z.string(),
      })
    )
    .optional(),
  project: z.string(),
  status: z.string(),
  priority: z.string(),
})

const statusValues = ["Todo", "Doing", "Done"]
const priorityValues = ["High", "Medium", "Low"]

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  subtasks: [{ value: "" }],
}

export function ProfileForm() {
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get("/projects")
      return response.data as Project[]
    },
  })

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "subtasks",
    control: form.control,
  })

  const [request, setRequest] = useState({})

  const { mutate } = useMutation({
    mutationFn: async () => {
      await api.post("/tasks", request)
    },
  })

  function onSubmit(data: ProfileFormValues) {
    console.log(data)

    const projectId = projects.data?.find(p => p.name == data.project)?.id

    const requestValue = {
      title: data.title,
      projectId: projectId,
      status: data.status,
      priority: data.priority,
    }

    setRequest(requestValue)
    mutate()

    console.log(request)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Learn CSS positioning" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`subtasks.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Subtasks
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Learn relative prop" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            className="mt-3"
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => append({ value: "" })}
          >
            <PlusCircle className="mr-3" />
            Add
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="project"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Project</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[150px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {projects.data === undefined
                          ? "Select"
                          : field.value
                          ? projects.data.find(
                              (project) => project.name === field.value
                            )?.name
                          : "Select"}

                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[150px] p-0">
                    <Command>
                      <CommandGroup>
                        {projects.data &&
                          projects.data.map((project) => (
                            <CommandItem
                              key={project.name}
                              value={project.name}
                              onSelect={(_) => {
                                form.setValue("project", project.name)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  project.name === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {project.name}
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Status</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[150px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? statusValues.find((x) => x === field.value)
                          : "Select"}

                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[150px] p-0">
                    <Command>
                      <CommandGroup>
                        {statusValues.map((x) => (
                          <CommandItem
                            key={x}
                            value={x}
                            onSelect={(_) => {
                              form.setValue("status", x)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                x === field.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {x}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Priority</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[150px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? priorityValues.find((x) => x === field.value)
                          : "Select"}

                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[150px] p-0">
                    <Command>
                      <CommandGroup>
                        {priorityValues.map((x) => (
                          <CommandItem
                            key={x}
                            value={x}
                            onSelect={(_) => {
                              form.setValue("priority", x)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                x === field.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {x}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
