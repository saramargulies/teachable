import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  try {
    const fetchConfig = {
      method: "GET",
      headers: {
        apiKey: process.env.API_KEY,
      },
    };

    const urls = [
      `https://developers.teachable.com/v1/users?per=1000`,
      `https://developers.teachable.com/v1/courses/${body.courseId}/enrollments`,
    ];

    const data = await Promise.all(
      urls.map(async (url) => {
        const resp = await fetch(url, fetchConfig);
        return resp.json();
      })
    );

    const enrollments = data[1]?.enrollments?.map((user) => user.user_id);

    if (enrollments) {
      const users = data[0]?.users?.filter((user) => {
        if (enrollments.includes(user.id)) {
          return user;
        }
      });
      try {
        return NextResponse.json({ enrolledUsers: users });
      } catch {
        return NextResponse.json({ error: "first error" });
      }
    } else {
      return NextResponse.json({ enrolledUsers: [] });
    }
  } catch (Exception) {
    return NextResponse.json({ error: "second error" });
  }
}
