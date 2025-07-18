"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(100, "Subject is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(550, "Message is too long")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned non-JSON response");
      }
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      setSubmitSuccess(true);
      reset();
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to send your message. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-transparent pt-4">
      <div className="py-12 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 className="text-4xl md:text-5xl mb-6 text-white text-center font-bold leading-snug">
          Connect with<span className="font-semibold font-sans"> Me!</span>
        </h1>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 text-base sm:text-lg lg:text-xl">
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 text-base sm:text-lg lg:text-xl">
        I&apos;d love to hear from you! Whether you have a question about my projects, want to collaborate on a new venture, or simply want to connect, feel free to reach out. I&apos;m always open to new opportunities and would be thrilled to discuss how I can contribute to your next project.
</p>

        </p>
        
        {submitSuccess && (
          <div className="mb-6 p-4 text-center font-semibold bg-slate-300 border-l-4 border-gray-500 text-neutral-900 rounded-full">
           <p>Message sent successfully! I&apos;ll get back to you soon.</p>
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
            <p>Error Sending Email, Try again.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className={`shadow-sm bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
              placeholder="name@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${errors.subject ? "border-red-500" : "border-gray-300"} shadow-sm focus:ring-primary-500 focus:border-primary-500`}
              placeholder="Just saying hi!"
              {...register("subject")}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
            )}
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-primary-500 focus:border-primary-500`}
              placeholder="Leave a comment..."
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}