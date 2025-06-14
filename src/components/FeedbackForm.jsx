"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "./magicui/shimmer-button";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FeedbackForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isBlocked, setBlocked] = useState(false);

  useEffect(() => {
    const { name, email, message } = data;
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }, [data]);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitter = e.nativeEvent.submitter;

    try {
      await toast.promise(
        async () => {
          setBlocked(true);
          if (submitter?.name === "send") {
            console.log("Send Message clicked");
            await axios
              .post("/api/form", data)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                const errorMsg =
                  err.response?.data?.error || "Something went wrong";
                throw new Error(errorMsg);
              });
          } else if (submitter?.name === "ai") {
            console.log("AI Reply clicked");
            await axios
              .post("/api/formAI", data)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                const errorMsg =
                  err.response?.data?.error || "Something went wrong";
                throw new Error(errorMsg);
              });
          }
        },
        {
          loading: "Loading",
          success:
            "Message sent successfully! We'll reach back in a short time",
          error: (err) => (err ? err.message : "Unknown error occured"),
        }
      );
    } catch (error) {
      console.log(`Signup error ${error}`);
      toast.error(`Signup error ${error.message}`);
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
                placeholder="John Doe"
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
                minLength={10}
              />
            </div>

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
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
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
