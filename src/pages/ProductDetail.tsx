
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="animate-fade-in">
              <div className="w-full h-96 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Main Product Image Placeholder</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((img) => (
                  <div key={img} className="w-full h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">IMG</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Product {id} Name</h1>
              <div className="text-3xl font-bold text-primary mb-6">$199.99</div>
              
              <p className="text-gray-600 mb-6">
                Detailed product description placeholder. Replace with your actual product description, 
                features, specifications, and benefits. This should be comprehensive and compelling.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold">Key Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Feature placeholder 1</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Feature placeholder 2</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Feature placeholder 3</span>
                  </li>
                </ul>
              </div>

              <div className="flex space-x-4 mb-8">
                <Button size="lg" className="flex-1 hover:scale-105 transition-transform duration-300" asChild>
                  <Link to="/cart">Add to Cart</Link>
                </Button>
                <Button size="lg" variant="outline" className="flex-1 hover:scale-105 transition-transform duration-300">
                  Save for Later
                </Button>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Product Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>SKU:</span>
                      <span>PRD-{id}-001</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Category:</span>
                      <span>Category Name</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Availability:</span>
                      <span className="text-green-600">In Stock</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span>Free shipping on orders over $100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
