"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { emailSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ExternalLink, Loader } from "lucide-react";
import Link from "next/link";
import { FocusEvent, MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

export default function Email() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  let isEmailFocused = false;

  type FormValues = z.infer<typeof emailSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(emailSchema),
  });
  const onSubmit = (UserData: FormValues) => {
    setIsLoading(true);
    try {
      emailSchema.parse(UserData);
      axios
        .post("/api/send", UserData)
        .then((data) => {
          toast({
            description: `Thank you ${UserData.name} for reaching out. Your message has been sent.`,
            title: "Email Sent",
          });
          reset({ message: "", subject: "" });
        })
        .catch((e) =>
          toast({
            variant: "destructive",
            description: e.response.data + "try",
          })
        )
        .finally(() => setIsLoading(false));
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log();
        toast({
          variant: "destructive",

          description: ` catch ${err.issues[0].path[0]} : ${err.issues[0].message}`,
        });
      }
    }
  };
  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value === "@gmail.com") {
      e.target.setSelectionRange(0, 0); // Set cursor to the start
    }
  };
  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "@gmail.com" && !isEmailFocused) {
      e.currentTarget.setSelectionRange(0, 0); // Set cursor to the start
      isEmailFocused = true;
    }
  };
  return (
    <Card className="mx-auto max-w-2xl my-5  bg-neutral-200/10 backdrop-blur-lg">
      <CardHeader className="flex justify-between">
        <div className="flex justify-between items-center">
          <CardTitle className="capitalize inline-block">
            send me an email{" "}
            <Link href={"mailto:rumeshranaweera99@gmail.com"}>
              <span className="sr-only">open in app</span>
              <ExternalLink
                className="inline-block sm:hidden font-bold"
                size={20}
              />
            </Link>
          </CardTitle>

          <Link
            href={"mailto:rumeshranaweera99@gmail.com"}
            className={`font-bold capitalize hidden sm:inline-block ${buttonVariants(
              {
                variant: "ghost",
              }
            )}`}
          >
            open in App <ExternalLink className="inline-block" size={18} />
          </Link>
        </div>
        <CardDescription>
          @{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  className="sm:font-bold cursor-pointer underline text-sm"
                  onClick={(e) => {
                    navigator.clipboard.writeText(e.currentTarget.innerText);
                    toast({ description: "Email copied" });
                  }}
                >
                  rumeshranaweera99@gmail.com
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>copy to chipboard</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="[&_p]:text-red-600 [&_p]:mt-2 [&_p]:font-semibold"
        >
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col md:flex-row space-y-1.5 md:space-y-0 md:justify-start gap-5">
              <div className="md:w-1/2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="name" {...register("name")} />
                <p>{errors.name?.message}</p>
              </div>
              <div className="md:w-1/2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Email@email.com"
                  {...register("email")}
                  defaultValue={"@gmail.com"}
                  onFocus={handleFocus}
                  onClick={handleClick}
                  onBlur={() => (isEmailFocused = false)}
                />
                <p>{errors.email?.message}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="subject"
                  {...register("subject")}
                />
                <p>{errors.subject?.message}</p>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  spellCheck
                  id="message"
                  placeholder="Type your message here."
                  {...register("message")}
                />
                <p>{errors.message?.message}</p>
              </div>
              <Button
                type="submit"
                className={cn(
                  "aria-disabled:cursor-not-allowed",
                  isLoading &&
                    "bg-opacity-50 bg-neutral-900 hover:bg-neutral-900/50"
                )}
                aria-disabled={isLoading}
              >
                {" "}
                {isLoading && (
                  <Loader className="animate-spin mr-2" size={15} />
                )}
                Sent
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
