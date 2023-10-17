import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VercelResponse } from "@/types/types";
import Link from "next/link";
export function ProjectCard({ data }: { data: VercelResponse["projects"][0] }) {
  //@ts-ignore
  const projectUrl = data?.latestDeployments[0].alias[0] || "hello";

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>
          {new Date(data?.updatedAt as number).toDateString()}
          <br />
          <a href={"https://" + projectUrl} target="_blank">
            {projectUrl}
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4"></div>
      </CardContent>
      {/* <CardFooter className="flex justify-between"></CardFooter> */}
    </Card>
  );
}
