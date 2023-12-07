
"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import {
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Select,
  } from "@/components/ui/select";

const formSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    eventName: z.string(),
    organizedBy: z.string(),
    startDate: z.date(),
    startTime: z.string(),
    endDate: z.date(),
    endTime: z.string(),
    aboutEvent: z.string(),
    limitedEntry: z.boolean(),
    ticketPrice: z.string(),
    poster: z.string(), // You may want to adjust this based on how you handle file uploads
  });

export default function EventForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventName: "",
      organizedBy: "",
      startDate: new Date,
      startTime: "",
      endDate: new Date,
      endTime: "",
      aboutEvent: "",
      limitedEntry: false,
      ticketPrice: "",
      poster: "",
    },
  });

  const [isCreating, setIsCreating] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    // ... (Existing code remains unchanged)
  };

  return (
    <main className="min-h-screen md:flex justify-center items-center bg-black text-white">
    <Form {...form}>
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="lg:max-w-lg w-full flex flex-col justify-center px-6 py-12 gap-4 text-black"
    >
      <FormField
        control={form.control}
        name="eventName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Event Name</FormLabel>
            <FormControl>
              <Input placeholder="Event Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="organizedBy"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Organized By</FormLabel>
            <FormControl>
              <Input placeholder="Organized By" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="startDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Start Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} value={field.value.toISOString().split('T')[0]} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

     <FormField
        control={form.control}
        name="endDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">End Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} value={field.value.toISOString().split('T')[0]} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="startTime"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Start Time</FormLabel>
            <FormControl>
              <Input type="time" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="endTime"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">End Time</FormLabel>
            <FormControl>
              <Input type="time" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="aboutEvent"
        render={({ field }) => (
          <FormItem className=" flex flex-col">
            <FormLabel className="text-white">About the Event</FormLabel>
            <FormControl>
              <textarea placeholder="About the Event" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

        <FormField
            control={form.control}
            name="limitedEntry"
            render={({ field }) => {
              return (  
                <FormItem>
                  <FormLabel className="text-white">Entry limited</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="personal">Yes</SelectItem>
                      <SelectItem value="company">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

      <FormField
        control={form.control}
        name="ticketPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Ticket Price</FormLabel>
            <FormControl>
              <Input placeholder="Ticket Price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="poster"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Poster</FormLabel>
            <FormControl>
              <Input type="file" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit" className="w-full border">
        Register Event
      </Button>
    </form>
    <p className="px-8 mt-4 text-center text-sm text-muted-foreground">
      {/* Add terms and privacy policy links */}
    </p>
  </Form>
</main>

  );
}
