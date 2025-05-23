import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {FEATURES, STEPS, TESTIMONIALS} from "@/lib/landing"
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return <div className="flex flex-col pt-16">
    <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
      <div className = "container mx-auto px-4 md:px-6 text-center space-y-6">
        <Badge variant="outline" className="bg-green-100 text-green-700">
          Track. Analyze. Split. Smarter with AI.
        </Badge>  
        <h1 className ="gradient-title mx-auto max-w-4xl text-4xl md:text-7xl font-bold">
        Smarter splits and insights for you and your crew.
        </h1>

        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
        Track group expenses, split smartly, settle fast — with insights that keep everyone on the same page.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size={"lg"} className=" hover:bg-teal-700">
            <Link href="/dashboard">Get Started</Link>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size={"lg"} className=" border-green-600 text-green-600 hover:bg-green-50">
            <Link href="#how-it-works">See How it Works</Link>
          </Button>
        </div>

      </div>  

      <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
        <div className="gradient p-1 aspect-[16/9]">
          <Image 
          src="/logos/hero.png"
          alt="Banner"
          width={1280}
          height={720}
          className="rounded-lg mx-auto"
          priority
          />
        </div>
      </div>

    </section>  

  <section id="features" className="bg-gray-100 py-20">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant="outline" className="bg-green-100 text-green-700">
          Features
      </Badge>
      <h2 className ="gradient-title mt-2 text-3xl md:text-4xl">
        Everything you need to track, split and settle expenses.
      </h2>

      <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
        Track group expenses, split smartly, settle fast — with insights that keep everyone on the same page.
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({title,Icon,bg,color,description})=>(
          <Card
          key = {title}
          className="flex flex-col items-center space-y-4 p-6 text-center"
          >
            <div className = {`rounded-full p-3 ${bg}`}>
              <Icon className={`h-6 w-6 ${color}`} />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className = "text-gray-500">{description}</p>
          </Card>
        
        ))}
      </div>


    </div>
  </section>

  <section id="how-it-works" className="py-20">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant="outline" className="bg-green-100 text-green-700">
          How it Works
      </Badge>
      <h2 className ="gradient-title mt-2 text-3xl md:text-4xl">
        Splitting expenses has never been easier.
      </h2>

      <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
        Follow these simple steps to start tracking and splitting expenses with your group.
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
        {STEPS.map(({description,label,title})=>(
          <div className="flex flex-col items-center space-y-4" key={title}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl font-bold">
              {label}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className = "text-gray-500 text-center">{description}</p>
          </div>
        ))}
      </div>


    </div>
  </section>

  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant="outline" className="bg-green-100 text-green-700">
          Testimonials
      </Badge>
      <h2 className ="gradient-title mt-2 text-3xl md:text-4xl">
        What our users say about us.
      </h2>


      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map(({ quote, name, role, image }, index) => (
        <Card key={index} className="h-full">
          <CardContent className="space-y-6 p-6">
            <p className="text-base text-gray-500">"{quote}"</p>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium">{name}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      </div>
    </div>
  </section>

  <section className="py-20 gradient">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
        <h2 className = "text-3xl font-extrabold tracking-tight md:text-4xl text-white">
          Ready to simplify your expense tracking?
        </h2>

        <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed">
          Join us today and experience the difference for yourself!
        </p>

        <Button asChild size={"lg"} className="bg-green-900 hover:opacity-90">
          <Link href="/dashboard">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
  </section>

  <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} EzSplit. All rights reserved.
      </p>
      <p>
        Made with ❤️ by{" Anjesh "}
      </p>
  </footer>
  </div>;
}
