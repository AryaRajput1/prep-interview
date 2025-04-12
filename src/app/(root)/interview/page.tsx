import Agent from "@/components/agent"
import { getCurrentUser } from "@/lib/actions/auth.action"

async function page() {
  const user = await getCurrentUser()
  return (
    <>
        <h3>Interview Generation</h3>
        <Agent userName={user?.name!} userId={user?.id} type={'generate'}/>
    </>
  )
}
export default page