import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

export default async function StudentTable({ params }) {
  const slug = params;

  let students = await getEnrollments(slug.courseId);
  return (
    <div className="max-h-[50vh] max-w-[50vh]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students?.enrolledUsers?.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
