import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_listings_features_icon" AS ENUM('neutral', 'bedroom', 'bathroom', 'hotWater', 'kitchen', 'fridge', 'washer', 'airConditioning', 'wifi', 'furnished', 'security', 'parking', 'electricity', 'elevator');
  CREATE TYPE "public"."enum_listings_offer" AS ENUM('rent', 'sale');
  CREATE TYPE "public"."enum_listings_type" AS ENUM('furnished', 'unfurnished');
  CREATE TYPE "public"."enum_listings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__listings_v_version_features_icon" AS ENUM('neutral', 'bedroom', 'bathroom', 'hotWater', 'kitchen', 'fridge', 'washer', 'airConditioning', 'wifi', 'furnished', 'security', 'parking', 'electricity', 'elevator');
  CREATE TYPE "public"."enum__listings_v_version_offer" AS ENUM('rent', 'sale');
  CREATE TYPE "public"."enum__listings_v_version_type" AS ENUM('furnished', 'unfurnished');
  CREATE TYPE "public"."enum__listings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TABLE "listings_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon" "enum_listings_features_icon" DEFAULT 'neutral'
  );
  
  CREATE TABLE "listings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"offer" "enum_listings_offer" DEFAULT 'rent',
  	"available" boolean DEFAULT true,
  	"order" numeric,
  	"title" varchar,
  	"short_title" varchar,
  	"type" "enum_listings_type",
  	"bedrooms" numeric,
  	"bathrooms" numeric,
  	"location" varchar,
  	"landmark" varchar,
  	"summary" varchar,
  	"price" varchar,
  	"description" varchar,
  	"video_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_listings_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "listings_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "_listings_v_version_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon" "enum__listings_v_version_features_icon" DEFAULT 'neutral',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_listings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_offer" "enum__listings_v_version_offer" DEFAULT 'rent',
  	"version_available" boolean DEFAULT true,
  	"version_order" numeric,
  	"version_title" varchar,
  	"version_short_title" varchar,
  	"version_type" "enum__listings_v_version_type",
  	"version_bedrooms" numeric,
  	"version_bathrooms" numeric,
  	"version_location" varchar,
  	"version_landmark" varchar,
  	"version_summary" varchar,
  	"version_price" varchar,
  	"version_description" varchar,
  	"version_video_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__listings_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_listings_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
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
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "videos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar,
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
  	"name" varchar,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
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
  	"listings_id" integer,
  	"media_id" integer,
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
  
  ALTER TABLE "listings_features" ADD CONSTRAINT "listings_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "listings" ADD CONSTRAINT "listings_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_listings_v_version_features" ADD CONSTRAINT "_listings_v_version_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_listings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_listings_v" ADD CONSTRAINT "_listings_v_parent_id_listings_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."listings"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_listings_v" ADD CONSTRAINT "_listings_v_version_video_id_videos_id_fk" FOREIGN KEY ("version_video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_listings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "listings_features_order_idx" ON "listings_features" USING btree ("_order");
  CREATE INDEX "listings_features_parent_id_idx" ON "listings_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "listings_slug_idx" ON "listings" USING btree ("slug");
  CREATE INDEX "listings_video_idx" ON "listings" USING btree ("video_id");
  CREATE INDEX "listings_updated_at_idx" ON "listings" USING btree ("updated_at");
  CREATE INDEX "listings_created_at_idx" ON "listings" USING btree ("created_at");
  CREATE INDEX "listings__status_idx" ON "listings" USING btree ("_status");
  CREATE INDEX "listings_rels_order_idx" ON "listings_rels" USING btree ("order");
  CREATE INDEX "listings_rels_parent_idx" ON "listings_rels" USING btree ("parent_id");
  CREATE INDEX "listings_rels_path_idx" ON "listings_rels" USING btree ("path");
  CREATE INDEX "listings_rels_media_id_idx" ON "listings_rels" USING btree ("media_id");
  CREATE INDEX "_listings_v_version_features_order_idx" ON "_listings_v_version_features" USING btree ("_order");
  CREATE INDEX "_listings_v_version_features_parent_id_idx" ON "_listings_v_version_features" USING btree ("_parent_id");
  CREATE INDEX "_listings_v_parent_idx" ON "_listings_v" USING btree ("parent_id");
  CREATE INDEX "_listings_v_version_version_slug_idx" ON "_listings_v" USING btree ("version_slug");
  CREATE INDEX "_listings_v_version_version_video_idx" ON "_listings_v" USING btree ("version_video_id");
  CREATE INDEX "_listings_v_version_version_updated_at_idx" ON "_listings_v" USING btree ("version_updated_at");
  CREATE INDEX "_listings_v_version_version_created_at_idx" ON "_listings_v" USING btree ("version_created_at");
  CREATE INDEX "_listings_v_version_version__status_idx" ON "_listings_v" USING btree ("version__status");
  CREATE INDEX "_listings_v_created_at_idx" ON "_listings_v" USING btree ("created_at");
  CREATE INDEX "_listings_v_updated_at_idx" ON "_listings_v" USING btree ("updated_at");
  CREATE INDEX "_listings_v_latest_idx" ON "_listings_v" USING btree ("latest");
  CREATE INDEX "_listings_v_rels_order_idx" ON "_listings_v_rels" USING btree ("order");
  CREATE INDEX "_listings_v_rels_parent_idx" ON "_listings_v_rels" USING btree ("parent_id");
  CREATE INDEX "_listings_v_rels_path_idx" ON "_listings_v_rels" USING btree ("path");
  CREATE INDEX "_listings_v_rels_media_id_idx" ON "_listings_v_rels" USING btree ("media_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
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
  CREATE INDEX "payload_locked_documents_rels_listings_id_idx" ON "payload_locked_documents_rels" USING btree ("listings_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
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
   DROP TABLE "listings_features" CASCADE;
  DROP TABLE "listings" CASCADE;
  DROP TABLE "listings_rels" CASCADE;
  DROP TABLE "_listings_v_version_features" CASCADE;
  DROP TABLE "_listings_v" CASCADE;
  DROP TABLE "_listings_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "videos" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_listings_features_icon";
  DROP TYPE "public"."enum_listings_offer";
  DROP TYPE "public"."enum_listings_type";
  DROP TYPE "public"."enum_listings_status";
  DROP TYPE "public"."enum__listings_v_version_features_icon";
  DROP TYPE "public"."enum__listings_v_version_offer";
  DROP TYPE "public"."enum__listings_v_version_type";
  DROP TYPE "public"."enum__listings_v_version_status";
  DROP TYPE "public"."enum_users_role";`)
}
