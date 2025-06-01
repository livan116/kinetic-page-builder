
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductPage = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Premium Product 1", price: "$299", originalPrice: "$399", description: "High-quality product with advanced features and excellent durability", category: "Electronics", rating: 4.8, reviews: 124 },
    { id: 2, name: "Professional Product 2", price: "$199", originalPrice: "$249", description: "Professional-grade product designed for optimal performance", category: "Tools", rating: 4.6, reviews: 89 },
    { id: 3, name: "Deluxe Product 3", price: "$399", originalPrice: "$499", description: "Deluxe edition with premium materials and enhanced functionality", category: "Electronics", rating: 4.9, reviews: 203 },
    { id: 4, name: "Standard Product 4", price: "$149", originalPrice: "$199", description: "Reliable standard product perfect for everyday use", category: "Home", rating: 4.5, reviews: 67 },
    { id: 5, name: "Pro Product 5", price: "$349", originalPrice: "$429", description: "Professional product with cutting-edge technology", category: "Tools", rating: 4.7, reviews: 156 },
    { id: 6, name: "Elite Product 6", price: "$499", originalPrice: "$599", description: "Elite-level product with premium features and materials", category: "Electronics", rating: 4.9, reviews: 278 },
  ];

  const categories = ["All", "Electronics", "Tools", "Home"];

  const filteredProducts = products.filter(product => {
    const price = parseInt(product.price.replace('$', ''));
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch = price >= priceRange[0] && price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Premium Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated collection of high-quality products designed to meet your needs and exceed your expectations.
            </p>
          </div>

          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-12 mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
                <p className="text-xl mb-6 opacity-90">
                  Get up to 30% off on selected products. Premium quality at unbeatable prices.
                </p>
                <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform duration-300">
                  Shop Sale Items
                </Button>
              </div>
              <div className="h-64 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white/70">Hero Product Image</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Filter Products</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded transition-colors ${
                            selectedCategory === category 
                              ? 'bg-primary text-white' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="space-y-3">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Filters */}
                  <div>
                    <h3 className="font-semibold mb-3">Quick Filters</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Top Rated
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        On Sale
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        New Arrivals
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Sort Bar */}
              <div className="flex justify-between items-center mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                {filteredProducts.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="relative">
                        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-gray-500">Product Image</span>
                        </div>
                        {product.originalPrice !== product.price && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                            SALE
                          </div>
                        )}
                        <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-semibold">
                          ⭐ {product.rating}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        {product.originalPrice !== product.price && (
                          <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center mb-4 text-sm text-gray-600">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                        <span>({product.reviews} reviews)</span>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1" asChild>
                          <Link to={`/product/${product.id}`}>View Details</Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          ♡
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Brands */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map((brand) => (
                <div key={brand} className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow">
                  <span className="text-gray-500">Brand {brand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gray-50 rounded-lg p-12 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be the first to know about new products, exclusive deals, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="px-8 hover:scale-105 transition-transform duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
