import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

/** Désactive le mode brouillon et revient à la page publique. */
export async function GET(req: Request): Promise<Response> {
  const to = new URL(req.url).searchParams.get("to") || "/";
  (await draftMode()).disable();
  redirect(to);
}
