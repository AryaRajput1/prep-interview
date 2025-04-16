import InterviewCard from "@/components/interviewCard";
import { MotionDiv, MotionSection } from "@/components/motion/wrapper";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import Image from "next/image";
import Link from "next/link";

async function RootPage() {
  const user = await getCurrentUser();
  const [userInterviews, allLatestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  return (
    <>
      <MotionSection
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
        }}
        className="card-cta"
      >
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg text-gray-500">
            Practice coding interviews with AI-powered feedback.
          </p>
          <MotionDiv
            whileHover={{
              scale: 1.05,
              shadow: "0 0 10px rgba(0,0,0,0.2)",
              margin: "0 10px",
            }}
            whileTap={{ scale: 0.95, margin: "0" }}
            className="flex items-center w-full"
            transition={{
              duration: 0.2,
            }}
          >
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href={"/interview"}>Start an Interview</Link>
            </Button>
          </MotionDiv>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          aria-hidden
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </MotionSection>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {!userInterviews?.length ? (
            <p>You haven't taken any interviews yet.</p>
          ) : (
            userInterviews?.map((interview) => (
              <InterviewCard
                {...interview}
                key={interview.id}
                interviewId={interview.id}
              />
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
            allLatestInterviews?.map((interview, index) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          )}
        </div>
      </section>
    </>
  );
}
export default RootPage;
