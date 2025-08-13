import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/supabaseClient";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_00dsj1r";
const TEMPLATE_ID = "template_ymk3gss";
const PUBLIC_KEY = "lwlF6RN3rfPvwuZKL";
const WHATSAPP_NUMBER = "254791259510";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  businessSize: z.string().min(1, {
    message: "Please select your business size.",
  }),
  message: z.string().min(10, {
    message: "Please provide more details about your needs.",
  }),
});

const QuotePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      businessSize: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      company: values.company,
      service: values.service,
      business_size: values.businessSize,
      message: values.message,
    };

    // Save to Supabase
    const { error } = await supabase.from("quote_requests").insert([payload]);

    // Send email via EmailJS
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.company,
          service: values.service,
          business_size: values.businessSize,
          message: values.message,
          to_email: "ayawin.ke@gmail.com", // Ensure this matches your EmailJS template variable
        },
        PUBLIC_KEY
      );
    } catch (e) {
      // Optionally handle email error
    }

    if (error) {
      toast.error("Failed to submit quote. Please try again.");
    } else {
      toast.success("Your quote request has been submitted! We'll get back to you shortly.");
      form.reset();
    }
  }

  return (
    <div>
      {/* Logo at the top */}
      <div className="flex justify-center items-center py-6">
        <img
          src="/uploads/logo.png" // Place logo.png in public/uploads/
          alt="Ayawin Logo"
          className="w-32 h-auto"
        />
      </div>

      {/* Hero Section */}
      <section className="bg-blue-600 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Tell us about your business needs and we'll provide you with a customized quote.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Get Your Free Quote</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Needed</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="stock-takes">Stock Takes</SelectItem>
                              <SelectItem value="stock-arrangement">Stock Arrangement</SelectItem>
                              <SelectItem value="kra-stickers">KRA Stickers</SelectItem>
                              <SelectItem value="data-entry">Data Entry</SelectItem>
                              <SelectItem value="accounting">Accounting</SelectItem>
                              <SelectItem value="auditing">Auditing</SelectItem>
                              <SelectItem value="multiple">Multiple Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="businessSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select business size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="small">Small (1-10 employees)</SelectItem>
                              <SelectItem value="medium">Medium (11-50 employees)</SelectItem>
                              <SelectItem value="large">Large (51-200 employees)</SelectItem>
                              <SelectItem value="enterprise">Enterprise (201+ employees)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Details About Your Needs</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe your project, timeline, and any specific requirements" 
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" size="lg" className="w-full">Request Quote</Button>
                </form>
              </Form>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
              >
                Chat with us on WhatsApp
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                Need immediate assistance? Call us at{" "}
                <a
                  href="tel:+254791259510"
                  className="font-semibold text-blue-700 underline hover:text-blue-900"
                >
                  +254 791259510
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Our simple process for providing you with tailored inventory services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Submit Request</h3>
              <p className="text-gray-600">
                Fill out the quote request form with details about your business needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We'll contact you to discuss specific requirements and answer questions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Your Quote</h3>
              <p className="text-gray-600">
                Receive a customized quote based on your business's unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;