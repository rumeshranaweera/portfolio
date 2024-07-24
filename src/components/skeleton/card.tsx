import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function CardSkeleton() {
  return (
    <Card className="w-[350px] h-36 max-w-md rounded-xl shadow-xl animate-pulse">
      <CardHeader className="flex justify-center items-center">
        <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="h-4 bg-gray-300 rounded-md w-full mb-2"></div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CardSkeletons() {
  return (
    <ul className="flex flex-wrap justify-center gap-5">
      {Array.from({ length: 9 }).map((_, index) => (
        <li key={index}>
          <CardSkeleton />
        </li>
      ))}
    </ul>
  );
}
