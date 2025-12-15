"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "./magicui/shimmer-button";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchForm } from "@/app/actions/form";
import { fetchFormAI } from "@/app/actions/formAI";

export default function FeedbackForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    ts: Date.now(),
  });

  const [isBlocked, setBlocked] = useState(false);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitter = e.nativeEvent.submitter;
    let res;
    try {
      const payload = { ...data, ts: Date.now() };

      await toast.promise(
        async () => {
          setBlocked(true);
          if (submitter?.name === "send") {
            res = await fetchForm(payload);
          } else if (submitter?.name === "ai") {
            res = await fetchFormAI(payload);
          }

          if (!res?.success)
            throw new Error(res.error || "Something went wrong");
        },
        {
          loading: "Loading...",
          success: "Message sent successfully! We'll reach back shortly",
          error: (err) => (err ? err.message : "Unknown error occurred"),
        }
      );
    } catch (error) {
      console.log(`Form error: ${error}`);
      toast.error(`Form error: ${error.message}`);
    } finally {
      setBlocked(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col items-center justify-center w-full px-4 pt-10 pb-16">
        <div className="w-full max-w-lg bg-white dark:bg-[#0a0a23] rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800 transition-all">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
            Let’s Build Together
          </h2>

          <div className="space-y-5">
            <div className="space-y-1.5">
              <Label
                htmlFor="name"
                className="text-gray-700 dark:text-gray-300"
              >
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="Challenge accepted, Doe John!"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="bg-gray-50 dark:bg-gray-800 dark:text-white border dark:border-gray-600"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-300"
              >
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="bg-gray-50 dark:bg-gray-800 dark:text-white border dark:border-gray-600"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="message"
                className="text-gray-700 dark:text-gray-300"
              >
                How Can I Help?
              </Label>
              <Textarea
                id="message"
                placeholder="Briefly describe your project, idea, or feedback..."
                name="message"
                value={data.message}
                onChange={handleChange}
                className="min-h-[120px] bg-gray-50 dark:bg-gray-800 dark:text-white border dark:border-gray-600"
                required
                minLength={20}
              />
            </div>
            {/* Honeypot field */}
            <Input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                type="submit"
                disabled={isBlocked}
                className="w-full sm:w-1/2 px-7 transition-all hover:bg-purple-600"
                name="send"
              >
                Send Message
              </Button>

              <ShimmerButton
                className="w-full sm:w-1/2 shadow-2xl px-7"
                borderRadius="6px"
                disabled={isBlocked}
                type="submit"
                name="ai"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-md">
                  Let AI reply
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
