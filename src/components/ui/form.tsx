"use client"

import * as React from "react"
import {
  useFormContext,
  Controller,
  FieldValues,
  ControllerRenderProps,
} from "react-hook-form"
import { Slot } from "@radix-ui/react-slot"
import { Label } from "../ui/label"

type FormProps = React.PropsWithChildren<{
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}>

const Form = ({ children, handleSubmit }: FormProps) => {
  return <form onSubmit={handleSubmit}>{children}</form>
}

type FormFieldProps<TFieldValues extends FieldValues> = {
  name: string
  render: (props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: ControllerRenderProps<TFieldValues, any>
  }) => React.ReactElement
}

const FormField = <TFieldValues extends FieldValues>({ name, render }: FormFieldProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>()
  return <Controller name={name} control={control} render={render} />
}

const FormLabel = ({ children, ...props }: React.PropsWithChildren<React.ComponentProps<"label">>) => {
  return <Label {...props}>{children}</Label>
}

const FormControl = ({ children }: React.PropsWithChildren) => {
  return <Slot>{children}</Slot>
}

const FormMessage = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext()

  const error = errors?.[name as keyof typeof errors]
  if (!error) return null

  return (
    <p className="text-sm font-medium text-destructive">
      {error.message?.toString()}
    </p>
  )
}

export { Form, FormField, FormLabel, FormControl, FormMessage }