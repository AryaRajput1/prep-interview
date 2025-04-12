import InterviewCard from "@/components/interviewCard";
import { Button } from "@/components/ui/button";
import {
  getCurrentUser,
  getInterviewById,
  getLatestInterviews,
} from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";

async function RootPage() {
  const user = await getCurrentUser();
  const [userInterviews, allLatestInterviews] = await Promise.all([
    await getInterviewById(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg text-gray-500">
            Practice coding interviews with AI-powered feedback.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href={"/interview"}>Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          aria-hidden
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {!userInterviews?.length ? (
            <p>You haven't taken any interviews yet.</p>
          ) : (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {!allLatestInterviews?.length ? (
            <p>There are no more Interviews.</p>
          ) : (
            allLatestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          )}
        </div>
      </section>
    </>
  );
}
export default RootPage;
