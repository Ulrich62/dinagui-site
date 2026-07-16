import { getPayload } from 'payload'
import config from '../src/payload.config'

const run = async () => {
  const payload = await getPayload({ config })
  
  const existing = await payload.find({
    collection: 'users',
    where: { email: { equals: 'admin@dinagui.local' } },
  })

  if (existing.docs.length > 0) {
    await payload.update({
      collection: 'users',
      id: existing.docs[0].id,
      data: {
        password: 'AdminPassword123!',
        role: 'admin',
      },
    })
    console.log('✅ Admin user password reset successfully.')
  } else {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@dinagui.local',
        password: 'AdminPassword123!',
        role: 'admin',
      },
    })
    console.log('✅ Admin user created successfully.')
  }
  process.exit(0)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
