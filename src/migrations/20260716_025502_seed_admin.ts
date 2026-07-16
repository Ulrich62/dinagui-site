import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  const users = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: 'admin@dinagui.com',
      },
    },
  })

  if (users.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@dinagui.com',
        password: 'Dinagui01@2026',
        role: 'admin',
        name: 'Administration',
      },
    })
  }
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'users',
    where: {
      email: {
        equals: 'admin@dinagui.com',
      },
    },
  })
}
