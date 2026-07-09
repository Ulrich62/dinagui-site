import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_annonces_offre" AS ENUM('location', 'vente');
  CREATE TYPE "public"."enum_annonces_type" AS ENUM('meuble', 'non-meuble');
  CREATE TYPE "public"."enum_annonces_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__annonces_v_version_offre" AS ENUM('location', 'vente');
  CREATE TYPE "public"."enum__annonces_v_version_type" AS ENUM('meuble', 'non-meuble');
  CREATE TYPE "public"."enum__annonces_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editeur');
  CREATE TABLE "annonces" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"titre" varchar,
  	"titre_court" varchar,
  	"slug" varchar,
  	"offre" "enum_annonces_offre" DEFAULT 'location',
  	"type" "enum_annonces_type",
  	"localisation" varchar,
  	"repere" varchar,
  	"chambres" numeric,
  	"salles_de_bain" numeric,
  	"resume" varchar,
  	"description" jsonb,
  	"video_id" integer,
  	"prix_affiche" varchar,
  	"disponible" boolean DEFAULT true,
  	"ordre" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_annonces_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "annonces_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "annonces_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"medias_id" integer
  );
  
  CREATE TABLE "_annonces_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_titre" varchar,
  	"version_titre_court" varchar,
  	"version_slug" varchar,
  	"version_offre" "enum__annonces_v_version_offre" DEFAULT 'location',
  	"version_type" "enum__annonces_v_version_type",
  	"version_localisation" varchar,
  	"version_repere" varchar,
  	"version_chambres" numeric,
  	"version_salles_de_bain" numeric,
  	"version_resume" varchar,
  	"version_description" jsonb,
  	"version_video_id" integer,
  	"version_prix_affiche" varchar,
  	"version_disponible" boolean DEFAULT true,
  	"version_ordre" numeric,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__annonces_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_annonces_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_annonces_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"medias_id" integer
  );
  
  CREATE TABLE "medias" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_carte_url" varchar,
  	"sizes_carte_width" numeric,
  	"sizes_carte_height" numeric,
  	"sizes_carte_mime_type" varchar,
  	"sizes_carte_filesize" numeric,
  	"sizes_carte_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "videos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"legende" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"nom" varchar,
  	"role" "enum_users_role" DEFAULT 'editeur' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"annonces_id" integer,
  	"medias_id" integer,
  	"videos_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "annonces" ADD CONSTRAINT "annonces_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "annonces_texts" ADD CONSTRAINT "annonces_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."annonces"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "annonces_rels" ADD CONSTRAINT "annonces_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."annonces"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "annonces_rels" ADD CONSTRAINT "annonces_rels_medias_fk" FOREIGN KEY ("medias_id") REFERENCES "public"."medias"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_annonces_v" ADD CONSTRAINT "_annonces_v_parent_id_annonces_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."annonces"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_annonces_v" ADD CONSTRAINT "_annonces_v_version_video_id_videos_id_fk" FOREIGN KEY ("version_video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_annonces_v_texts" ADD CONSTRAINT "_annonces_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_annonces_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_annonces_v_rels" ADD CONSTRAINT "_annonces_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_annonces_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_annonces_v_rels" ADD CONSTRAINT "_annonces_v_rels_medias_fk" FOREIGN KEY ("medias_id") REFERENCES "public"."medias"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_annonces_fk" FOREIGN KEY ("annonces_id") REFERENCES "public"."annonces"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_medias_fk" FOREIGN KEY ("medias_id") REFERENCES "public"."medias"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "annonces_slug_idx" ON "annonces" USING btree ("slug");
  CREATE INDEX "annonces_video_idx" ON "annonces" USING btree ("video_id");
  CREATE INDEX "annonces_updated_at_idx" ON "annonces" USING btree ("updated_at");
  CREATE INDEX "annonces_created_at_idx" ON "annonces" USING btree ("created_at");
  CREATE INDEX "annonces__status_idx" ON "annonces" USING btree ("_status");
  CREATE INDEX "annonces_texts_order_parent" ON "annonces_texts" USING btree ("order","parent_id");
  CREATE INDEX "annonces_rels_order_idx" ON "annonces_rels" USING btree ("order");
  CREATE INDEX "annonces_rels_parent_idx" ON "annonces_rels" USING btree ("parent_id");
  CREATE INDEX "annonces_rels_path_idx" ON "annonces_rels" USING btree ("path");
  CREATE INDEX "annonces_rels_medias_id_idx" ON "annonces_rels" USING btree ("medias_id");
  CREATE INDEX "_annonces_v_parent_idx" ON "_annonces_v" USING btree ("parent_id");
  CREATE INDEX "_annonces_v_version_version_slug_idx" ON "_annonces_v" USING btree ("version_slug");
  CREATE INDEX "_annonces_v_version_version_video_idx" ON "_annonces_v" USING btree ("version_video_id");
  CREATE INDEX "_annonces_v_version_version_updated_at_idx" ON "_annonces_v" USING btree ("version_updated_at");
  CREATE INDEX "_annonces_v_version_version_created_at_idx" ON "_annonces_v" USING btree ("version_created_at");
  CREATE INDEX "_annonces_v_version_version__status_idx" ON "_annonces_v" USING btree ("version__status");
  CREATE INDEX "_annonces_v_created_at_idx" ON "_annonces_v" USING btree ("created_at");
  CREATE INDEX "_annonces_v_updated_at_idx" ON "_annonces_v" USING btree ("updated_at");
  CREATE INDEX "_annonces_v_latest_idx" ON "_annonces_v" USING btree ("latest");
  CREATE INDEX "_annonces_v_texts_order_parent" ON "_annonces_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "_annonces_v_rels_order_idx" ON "_annonces_v_rels" USING btree ("order");
  CREATE INDEX "_annonces_v_rels_parent_idx" ON "_annonces_v_rels" USING btree ("parent_id");
  CREATE INDEX "_annonces_v_rels_path_idx" ON "_annonces_v_rels" USING btree ("path");
  CREATE INDEX "_annonces_v_rels_medias_id_idx" ON "_annonces_v_rels" USING btree ("medias_id");
  CREATE INDEX "medias_updated_at_idx" ON "medias" USING btree ("updated_at");
  CREATE INDEX "medias_created_at_idx" ON "medias" USING btree ("created_at");
  CREATE UNIQUE INDEX "medias_filename_idx" ON "medias" USING btree ("filename");
  CREATE INDEX "medias_sizes_carte_sizes_carte_filename_idx" ON "medias" USING btree ("sizes_carte_filename");
  CREATE INDEX "medias_sizes_hero_sizes_hero_filename_idx" ON "medias" USING btree ("sizes_hero_filename");
  CREATE INDEX "videos_updated_at_idx" ON "videos" USING btree ("updated_at");
  CREATE INDEX "videos_created_at_idx" ON "videos" USING btree ("created_at");
  CREATE UNIQUE INDEX "videos_filename_idx" ON "videos" USING btree ("filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_annonces_id_idx" ON "payload_locked_documents_rels" USING btree ("annonces_id");
  CREATE INDEX "payload_locked_documents_rels_medias_id_idx" ON "payload_locked_documents_rels" USING btree ("medias_id");
  CREATE INDEX "payload_locked_documents_rels_videos_id_idx" ON "payload_locked_documents_rels" USING btree ("videos_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "annonces" CASCADE;
  DROP TABLE "annonces_texts" CASCADE;
  DROP TABLE "annonces_rels" CASCADE;
  DROP TABLE "_annonces_v" CASCADE;
  DROP TABLE "_annonces_v_texts" CASCADE;
  DROP TABLE "_annonces_v_rels" CASCADE;
  DROP TABLE "medias" CASCADE;
  DROP TABLE "videos" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_annonces_offre";
  DROP TYPE "public"."enum_annonces_type";
  DROP TYPE "public"."enum_annonces_status";
  DROP TYPE "public"."enum__annonces_v_version_offre";
  DROP TYPE "public"."enum__annonces_v_version_type";
  DROP TYPE "public"."enum__annonces_v_version_status";
  DROP TYPE "public"."enum_users_role";`)
}
