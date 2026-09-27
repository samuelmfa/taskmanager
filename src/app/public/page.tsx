import { cookies } from "next/headers";
import PublicTasksFeaturePage from "@/features/tasks/pages/PublicTasksPage";
import {
  sessionCookieName,
  verifySessionToken,
} from "@/shared/infrastructure/auth/session";

export default async function PublicTasksPage() {
  const cookieStore = await cookies();
  const session = verifySessionToken(
    cookieStore.get(sessionCookieName)?.value,
  );

  return <PublicTasksFeaturePage isAuthenticated={Boolean(session)} />;
}