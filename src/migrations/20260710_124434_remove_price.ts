import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "listings" DROP COLUMN "price";
  ALTER TABLE "_listings_v" DROP COLUMN "version_price";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "listings" ADD COLUMN "price" varchar;
  ALTER TABLE "_listings_v" ADD COLUMN "version_price" varchar;`)
}
