import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Route de prévisualisation appelée par le bouton « Prévisualiser » de l'admin.
 * Vérifie que l'appelant est un utilisateur Payload authentifié (cookie de session),
 * active le mode brouillon de Next, puis redirige vers la page de l'annonce —
 * qui affichera alors la dernière version (brouillon compris).
 */
export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response("Paramètre « slug » manquant.", { status: 400 });
  }

  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: req.headers });
  if (!user) {
    return new Response("Non autorisé — connectez-vous à l'admin.", { status: 401 });
  }

  (await draftMode()).enable();
  redirect(`/nos-offres/location-dappartements/${slug}`);
}
