
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const OrderConfirmation = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-scale-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600">
              Thank you for your purchase. Your order has been successfully processed.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Order Number:</span>
                    <span className="font-semibold">#ORD-123456</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Order Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Payment Method:</span>
                    <span>**** **** **** 1234</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total Amount:</span>
                    <span className="text-primary">$357.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Items Ordered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">Product 1</span>
                      <span className="text-gray-500 block text-sm">Quantity: 2</span>
                    </div>
                    <span>$198.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">Product 2</span>
                      <span className="text-gray-500 block text-sm">Quantity: 1</span>
                    </div>
                    <span>$149.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Confirmation email sent to your registered email address</li>
                  <li>• Your order will be processed within 1-2 business days</li>
                  <li>• Tracking information will be provided once shipped</li>
                  <li>• Estimated delivery: 3-5 business days</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="hover:scale-105 transition-transform duration-300">
                <Link to="/dashboard">Track Your Order</Link>
              </Button>
              <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
            <p className="text-gray-600 text-sm">
              Questions about your order? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
