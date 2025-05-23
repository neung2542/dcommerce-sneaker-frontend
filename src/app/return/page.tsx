import { redirect } from 'next/navigation'

import { stripe } from '../lib/stripe'

import ReturnSuccess from '@/ui/ReturnSuccess'

export default async function Return({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    // const { session_id } = await searchParams
    const session_id = (await searchParams).session_id as string

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })
    const status = session.status
    const customerEmail = session.customer_details?.email ?? ''
    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {
        // Clear the cart after successful payment
        return (
            <ReturnSuccess
                email={customerEmail}
            />
        )
    }
}

