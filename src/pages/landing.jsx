import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const LandingPage = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  // ✅ Newsletter state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFindJobs = () => {
    if (!isSignedIn) {
      navigate("/jobs?sign-in=true", { replace: false });
    } else {
      navigate("/jobs");
    }
  };

  const handlePostJob = () => {
    if (!isSignedIn) {
      navigate("/post-job?sign-in=true", { replace: false });
    } else {
      navigate("/post-job");
    }
  };

  // ✅ Newsletter subscription handler
  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setMessage("⚠️ Please enter a valid email address.");
      return;
    }

    let savedEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]");
    savedEmails.push(email);
    localStorage.setItem("subscribedEmails", JSON.stringify(savedEmails));

    setMessage("✅ Thank you! You'll receive updates soon.");
    setEmail("");
  };

  return (
    <main className="flex flex-col gap-16 py-12 sm:gap-24 sm:py-20">
      {/* HERO SECTION */}
      <section className="px-4 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter gradient-title sm:text-6xl lg:text-7xl">
          Discover Roles That Inspire You <br />
          <span className="text-blue-400">Faster. Smarter. Easier.</span>
        </h1>
        <p className="mt-4 text-base text-gray-300 sm:text-lg">
          Your gateway to exciting careers and outstanding candidates
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <Button variant="blue" size="xl" onClick={handleFindJobs}>
            View Jobs
          </Button>
          <Button variant="destructive" size="xl" onClick={handlePostJob}>
            Hire Talent
          </Button>
        </div>
      </section>

      {/* TRUSTED COMPANIES */}
      <section className="px-4 text-center">
        <h2 className="mb-4 text-xl font-semibold text-gray-300">
          Trusted by top companies
        </h2>
        <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-6">
          <CarouselContent className="flex items-center gap-8 sm:gap-20">
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="object-contain transition h-9 sm:h-14 opacity-80 hover:opacity-100"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* WHY CHOOSE US */}
      <section className="grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>🚀 Fast Hiring</CardTitle>
          </CardHeader>
          <CardContent>Get hired 2x faster with AI-powered job matching.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🌎 Top Companies</CardTitle>
          </CardHeader>
          <CardContent>Connect with reputable employers worldwide.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>💼 Easy Apply</CardTitle>
          </CardHeader>
          <CardContent>Apply for multiple jobs with one-click applications.</CardContent>
        </Card>
      </section>

     {/* VIDEO SECTION */}
<section className="px-4 py-12 mx-4 text-center bg-gray-800 rounded-lg">
  <h2 className="mb-6 text-3xl font-bold text-white">Learn How Opportix Works</h2>
  <div className="relative w-full max-w-4xl mx-auto aspect-video">
    <video 
      className="w-full h-full rounded-lg shadow-lg"
      controls
    >
      <source src="/videos/ProjectDemo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>


      {/* TESTIMONIAL */}
      <section className="p-10 mx-4 text-center bg-gray-900 rounded-xl">
        <h2 className="mb-6 text-3xl font-bold text-white">What Our Users Say</h2>
        <p className="max-w-2xl mx-auto italic text-gray-300">
          "Opportix helped me land my dream job within two weeks! The process was seamless
          and I loved the instant application tracking."
        </p>
        <p className="mt-3 font-semibold text-blue-400">— Sarah K., Software Engineer</p>
      </section>

      {/* BLOG SECTION */}
      <section className="px-4">
        <h2 className="mb-6 text-3xl font-bold text-center">From Our Blog</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="transition hover:shadow-lg">
            <CardHeader>
              <CardTitle>Top 10 Interview Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-400">
                Learn how to impress recruiters and land your dream job.
              </p>
              <a
                href="https://resumegenius.com/blog/interview/interview-tips?msockid=23996cafd2196ec53e9e7f4dd3eb6fc7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Read More →
              </a>
            </CardContent>
          </Card>

          <Card className="transition hover:shadow-lg">
            <CardHeader>
              <CardTitle>How to Write a Winning Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-400">
                Stand out from other applicants with a professional resume.
              </p>
              <a
                href="https://www.indeed.com/career-advice/resumes-cover-letters/winning-resumes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Read More →
              </a>
            </CardContent>
          </Card>

          <Card className="transition hover:shadow-lg">
            <CardHeader>
              <CardTitle>Remote Work Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-400">
                Discover tips to stay productive while working from home.
              </p>
              <a
                href="https://remote.com/blog/remote-work/remote-work-best-practices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Read More →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4">
        <h2 className="mb-4 text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ✅ NEWSLETTER SIGNUP with working logic */}
      <section className="py-16 mx-4 text-center rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600">
        <h2 className="mb-3 text-3xl font-bold text-white">
          Stay Ahead in Your Career Journey 🚀
        </h2>
        <p className="px-2 mb-6 text-blue-100 sm:px-0">
          Subscribe to get the latest job updates, tips, and hiring opportunities straight to your inbox.
        </p>

        <div className="flex flex-col items-center justify-center max-w-2xl gap-4 mx-auto sm:flex-row sm:px-2">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 text-sm text-gray-800 rounded-full sm:flex-1 focus:outline-none sm:text-base"
          />
          <Button
            variant="destructive"
            size="lg"
            onClick={handleSubscribe}
            className="w-full text-black transition bg-yellow-400 rounded-full sm:w-auto hover:bg-yellow-500"
          >
            Subscribe
          </Button>
        </div>

        {message && (
          <p className="px-4 mt-3 text-sm font-medium text-yellow-200 sm:px-0">
            {message}
          </p>
        )}

        <p className="px-4 mt-3 text-xs text-blue-100 sm:px-0">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </section>
    </main>
  );
};

export default LandingPage;
