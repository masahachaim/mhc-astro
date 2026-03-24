import { defineAction } from "astro:actions"
import { z } from "astro/zod"
import { BrevoClient } from "@getbrevo/brevo"

export const server = {
    subscribe: defineAction({
        accept: "form",
        input: z.object({
            firstname: z.string().min(1),
            email: z.string().email(),
        }),
        handler: async (input) => {
            const client = new BrevoClient({
                apiKey: import.meta.env.BREVO_API_KEY,
            })
            const res = await client.contacts.createContact({
                email: input.email,
                attributes: {
                    FNAME: input.firstname,
                },
                listIds: [2],
            })
            console.log("Brevo response:", res)
            return { success: true }
        },
    }),
}
