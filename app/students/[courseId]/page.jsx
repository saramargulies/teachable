import StudentTable from "@/app/students/[courseId]/_components/StudentTable";

async function getCourseInfo(courseId){
  const fetchConfig = {
    method: "GET",
    headers: {
      accept: "application/json",
      apiKey: process.env.API_KEY
    }
  }
  let response = await fetch(
    `https://developers.teachable.com/v1/courses/${courseId}`,
    fetchConfig
  );
  let json = await response.json();
  return json;
}

export default async function Students({params}) {
  let courseInfo = await getCourseInfo(params.courseId);

  return (
    <div>
      <h1 className="text-4xl font-extrabold dark:text-white p-8">{courseInfo.course.name} Enrollments</h1>
    <div className="flex items-center justify-evenly flex-col xl:flex-row min-h-[60vh]">
      <StudentTable params={params}/>
    </div>
    </div>
  );
}
