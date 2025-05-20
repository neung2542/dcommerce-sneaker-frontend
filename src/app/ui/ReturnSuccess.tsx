'use client'
import { useCart } from "@/ui/CartProvider"

const ReturnSuccess = ({ email }: { email: string }) => {
    const { clearCart } = useCart()
    clearCart()

    return (
        <div className="global-container py-6">
            <div className="grid lg:grid-cols-3 grey-bg px-8 py-6 rounded-lg gap-6 ">
                <div className="lg:col-span-2">
                    <h2 className="text-4xl font-bold">Payment Successful</h2>
                    <p className="text-lg">Thank you for your purchase!</p>
                    <p className="text-lg">A confirmation email has been sent to {email}</p>
                </div>
            </div>
        </div>
    )
}

export default ReturnSuccess