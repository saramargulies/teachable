import { StudentTable } from "./_components/StudentTable";

export async function generateStaticParams() {
  const { courses } = await fetch('https://developers.teachable.com/v1/courses', {
    method: "GET",
    headers: {
      accept: "application/json",
      apiKey: process.env.API_KEY
    }
  }).then((res) => res.json())
  return courses.map((course) => ({
    slug: course.id,
  }))
}


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

async function getEnrollments(courseId) {
  const fetchConfig = {
    method: "POST",
    headers: {
      accept: "application/json",
    },
    body: JSON.stringify({ courseId: courseId }),
  };
  let response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/enrollments`,
    fetchConfig
  );
  let json = await response.json();
  return json;
}

export default async function Students({params}) {
  let courseId = params.courseId
  let courseInfo = await getCourseInfo(courseId);
  let students = await getEnrollments(courseId)
  return (
    <div>
      <h1 className="text-4xl font-extrabold dark:text-white p-8">{courseInfo.course.name} Enrollments</h1>
    <div className="flex items-center justify-evenly flex-col xl:flex-row min-h-[60vh]">
      <StudentTable students={students}/>
    </div>
    </div>
  );
}
