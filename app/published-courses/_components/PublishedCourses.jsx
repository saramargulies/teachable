import { CourseCard } from "@/app/published-courses/_components/CourseCard"

async function getCourses() {
  const fetchConfig = {
    method: "GET",
    headers: {
      accept: "application/json",
      apiKey: process.env.API_KEY
    }
  }
  let response = await fetch("https://developers.teachable.com/v1/courses", fetchConfig)
  let json = await response.json()
  return json
}


export default async function PublishedCourses() {
  let courses_from_api = await getCourses()

  return (
    <div>
      <div className="flex items-center justify-evenly flex-col xl:flex-row min-h-[75vh]">
        {courses_from_api?.courses?.map((course) => 
        {if(course.is_published){
          return <CourseCard course={course} key={course.id} />
        }})}
      </div>
    </div>

  );
}
