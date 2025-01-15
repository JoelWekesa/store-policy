'use server'

import { z } from 'zod'

const schema = z.object({
    contact: z.string().min(1, 'Contact information is required'),
})

export async function deleteAccount(formData: FormData) {
    const validatedFields = schema.safeParse({
        contact: formData.get('contact'),
    })

    if (!validatedFields.success) {
        return { error: 'Invalid input. Please provide a valid phone number or email.' }
    }

    // Here you would typically process the deletion request
    // For this example, we'll just simulate a successful request
    await new Promise(resolve => setTimeout(resolve, 1000))

    return { success: true }
}

