import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { decode } from 'html-entities'
import Image from "next/image"

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
    <div>
    <Card className="w-[350px] transition-all duration-700 hover:scale-110" key={course.course.id}>
      <CardHeader>
        <CardTitle>{decode(course.course.name)}</CardTitle>
        <CardDescription>{decode(course.course.heading)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={course.course.image_url} width={500} height={500} className="w-full h-64 object-cover"/>
      {decode(course.course.description)}
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
    </div>
  )
}


export default async function PublishedCourses() {
  let courses_from_api = await getCourses()

  return (
    <div>
      <h1>All Published Courses</h1>
      <div className="flex items-center justify-evenly flex-col xl:flex-row min-h-screen">
        {courses_from_api?.courses?.map((course) => 
        {if(course.is_published){
          return <CourseCard course={course} />
        }})}
      </div>
    </div>

  );
}
