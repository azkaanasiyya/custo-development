"use client"

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import FadeInSection from "../animation/fadeIn"

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Email is invalid"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
})

export default function ContactHero() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="p-2">
      <div className="hero-section bg-[url('/background/bg-pricing.png')] bg-cover bg-center rounded-[12px] pt-40 pb-12 md:pb-20 lg:pb-[6.5rem] px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center">
          <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-10">
            <FadeInSection delay={0.3} className="header flex flex-col gap-4 justify-center items-center" data-animate="header">
              <div className="text-[32px] md:text-[48px] lg:text-[56px] leading-[120%] font-semibold text-grayscale-950 text-center">
                <h1>Get in Touch</h1>
              </div>
              <p className="text-xlarge max-w-[470px] text-center text-gray-600">
                Whether you have a question, need support, or just want to say hello, we’re here and ready to help.
              </p>
            </FadeInSection>

            <FormProvider {...methods}>
              <Form handleSubmit={methods.handleSubmit(onSubmit)}>
                <FadeInSection delay={0.5}
                  className="form p-5 md:p-7 w-full lg:w-[708px] bg-white rounded-[1.25rem] border border-grayscale-200 flex flex-col gap-5"
                  data-animate="form"
                >
                  <div className="input flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <FormField
                        name="firstName"
                        render={({ field }) => (
                          <div className="flex flex-col gap-2">
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage name="firstName" />
                          </div>
                        )}
                      />

                      <FormField
                        name="lastName"
                        render={({ field }) => (
                          <div className="flex flex-col gap-2">
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage name="lastName" />
                          </div>
                        )}
                      />
                    </div>

                    <FormField
                      name="email"
                      render={({ field }) => (
                        <div className="flex flex-col gap-2">
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe@gmail.com" {...field} />
                          </FormControl>
                          <FormMessage name="email" />
                        </div>
                      )}
                    />

                    <FormField
                      name="subject"
                      render={({ field }) => (
                        <div className="flex flex-col gap-2">
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Custom Plan" {...field} />
                          </FormControl>
                          <FormMessage name="subject" />
                        </div>
                      )}
                    />

                    <FormField
                      name="message"
                      render={({ field }) => (
                        <div className="flex flex-col gap-2">
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter your message.." {...field} />
                          </FormControl>
                          <FormMessage name="message" />
                        </div>
                      )}
                    />
                  </div>

                  <Button type="submit" variant="primary" size="base" className="cursor-pointer">
                    Send Message
                  </Button>
                </FadeInSection>
              </Form>
            </FormProvider>
          </div>
      </div>
    </div>
  )
}
