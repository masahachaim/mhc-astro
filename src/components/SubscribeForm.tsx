import { actions } from "astro:actions"
import { withState } from "@astrojs/react/actions"
import { useActionState } from "react"

export default function SubscribeForm() {
    const [state, action, pending] = useActionState(
        withState(actions.subscribe),
        {
            data: { success: false },
            error: undefined,
        },
    )
    const success = state.data?.success && !state.error

    return (
        <div className="mx-auto w-full max-w-md px-6">
            <h2 className="text-center mb-4">Get Updates</h2>
            <p className="text-center">
                We're always actively working to create more materials to
                support the Messianic community. Subscribe for resources and
                news about our latest projects!
            </p>
            {success ? (
                <p className="text-center font-semibold">
                    Thank you for subscribing!
                </p>
            ) : (
                <form className="space-y-2 mb-3" action={action}>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name*"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        required
                    />
                    <button
                        type="submit"
                        className="button button--primary w-full"
                        disabled={pending}
                    >
                        {pending ? "Submitting..." : "Subscribe"}
                    </button>
                </form>
            )}
            {state.error && (
                <p className="text-center font-semibold text-red-600">
                    {state.error.message ??
                        "An error occurred. Please try again."}
                </p>
            )}
        </div>
    )
}
