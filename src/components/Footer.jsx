"use server";

import { socialMedia } from "@/data";
import FeedbackForm from "./FeedbackForm";
import Views from "./Views";
import Image from "next/image";
import Link from 'next/link'

export default async function Footer() {
  return (
    <footer className="w-full relative pt-15 pb-10 bg-transparent" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 top-0 z-0 min-h-96 opacity-50">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-6xl text-center mt-7 mb-2 lg:max-w-[60vw] tracking-tight leading-tight">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-neutral-300 md:mt-4 mb-10 max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        {/* Feedback Form */}
        <div className="w-full max-w-2xl mb-16">
          <FeedbackForm />
        </div>
      </div>

      <Views />

      {/* Bottom Section */}
      <div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-10"
        id="socials"
      >
        {/* License and Credits */}
        <p className="text-sm text-muted-foreground text-center md:text-left flex flex-wrap items-center gap-1 max-w-2xl">
          <Link
            href="https://darrylmathias.vercel.app"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Darryl Mathias Website"
          >
            Darryl Mathias Portfolio Website
          </Link>{" "}
          © 2025 by{" "}
          <Link
            href="https://www.linkedin.com/in/darryl-mathias-020241317/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Darryl Mathias Linkedin"
          >
            Darryl Mathias
          </Link>{" "}
          is licensed under{" "}
          <Link
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-ND 4.0
          </Link>
          {["cc", "by", "nc", "nd"].map((type) => (
            <Image
              key={type}
              src={`https://mirrors.creativecommons.org/presskit/icons/${type}.svg`}
              alt={type}
              style={{
                maxWidth: "1em",
                maxHeight: "1em",
                marginLeft: "0.2em",
              }}
              height={15}
              width={15}
            />
          ))}
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          {socialMedia.map((info) => (
            <Link
              aria-label = {info.about}
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-blur-md bg-black/40 rounded-lg border border-black/20 transition-transform hover:scale-105"
            >
              <Image
                src={info.img}
                alt={`${info.id}-icon`}
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground px-6 md:px-10 py-5">
        We collect your IP address to determine approximate location for
        analytics. This data is processed securely and never shared beyond
        essential services.
      </p>
    </footer>
  );
}
