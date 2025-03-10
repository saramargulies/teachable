import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { decode } from "html-entities";
import Image from "next/image";
import Link from "next/link";

export function CourseCard({course}) {
  return (
    <div key={course.id}>
      <Link href={`/published-courses/${course.id}`}>
        <Card className="w-[350px] transition-all duration-700 hover:scale-110">
          <CardHeader>
            <CardTitle>{decode(course.name)}</CardTitle>
            <CardDescription>{decode(course.heading)}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={course.image_url}
              width={500}
              height={500}
              className="w-full h-64 object-cover"
              alt="Course Image"
            />
            {decode(course.description)}
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </Link>
    </div>
  );
}
