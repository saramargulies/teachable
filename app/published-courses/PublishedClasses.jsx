import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getCourses() {
  const fetchConfig = {
    method: "GET",
    headers: {
      accept: "application/json",
      apiKey: process.env.API_KEY
    }
  }
  let response = await fetch("https://developers.teachable.com/v1/courses", {
    method: "GET",
    headers: {
      accept: "application/json",
      apiKey: process.env.API_KEY
    }
  })
  let json = await response.json()
  return json
}

export function CourseCard(course){
  return (
    <Card className="w-[350px]" key={course.id}>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
}


export default async function PublishedCourses() {
  let courses_from_api = await getCourses()
  // console.log(courses_from_api)

  return (
    <div>
      <h1>All Published Courses</h1>
      <div>
        {courses_from_api?.courses?.map((course) => 
        {if(course.is_published){
          console.log(course)
          return <CourseCard course={course} />
        }})}
      </div>
    </div>

  );
}
