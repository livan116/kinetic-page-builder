
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search, Filter, Star, Heart, ShoppingCart } from "lucide-react";

const ProductPage = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products = [
    { id: 1, name: "Premium Business Suite", category: "software", price: 299, rating: 4.8, image: "Product Image 1", description: "Complete business management solution with advanced analytics and reporting capabilities.", popular: true },
    { id: 2, name: "Digital Marketing Toolkit", category: "marketing", price: 199, rating: 4.6, image: "Product Image 2", description: "Comprehensive set of digital marketing tools and automation features.", popular: false },
    { id: 3, name: "Enterprise Security Package", category: "security", price: 499, rating: 4.9, image: "Product Image 3", description: "Advanced security solutions for enterprise-level protection and compliance.", popular: true },
    { id: 4, name: "Cloud Storage Pro", category: "storage", price: 99, rating: 4.5, image: "Product Image 4", description: "Scalable cloud storage solution with real-time sync and collaboration features.", popular: false },
    { id: 5, name: "Analytics Dashboard Plus", category: "analytics", price: 149, rating: 4.7, image: "Product Image 5", description: "Advanced analytics and visualization tools for data-driven decision making.", popular: false },
    { id: 6, name: "Communication Hub", category: "communication", price: 79, rating: 4.4, image: "Product Image 6", description: "Unified communication platform for seamless team collaboration.", popular: false },
    { id: 7, name: "Project Management Elite", category: "software", price: 249, rating: 4.8, image: "Product Image 7", description: "Professional project management with advanced scheduling and resource allocation.", popular: true },
    { id: 8, name: "Financial Planning Suite", category: "finance", price: 399, rating: 4.9, image: "Product Image 8", description: "Comprehensive financial planning and forecasting tools for businesses.", popular: false },
  ];

  const relatedProducts = [
    { id: 9, name: "Startup Accelerator Pack", category: "bundle", price: 199, rating: 4.6, image: "Related Product 1", description: "Essential tools and resources for startup businesses." },
    { id: 10, name: "Small Business Essentials", category: "bundle", price: 149, rating: 4.5, image: "Related Product 2", description: "Complete package for small business operations." },
    { id: 11, name: "Enterprise Growth Kit", category: "bundle", price: 599, rating: 4.8, image: "Related Product 3", description: "Advanced solutions for scaling enterprise operations." },
    { id: 12, name: "Digital Transformation Bundle", category: "bundle", price: 799, rating: 4.9, image: "Related Product 4", description: "Complete digital transformation solution package." },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "software", label: "Software" },
    { value: "marketing", label: "Marketing" },
    { value: "security", label: "Security" },
    { value: "storage", label: "Storage" },
    { value: "analytics", label: "Analytics" },
    { value: "communication", label: "Communication" },
    { value: "finance", label: "Finance" },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = priceRange === "all" || 
      (priceRange === "under-100" && product.price < 100) ||
      (priceRange === "100-300" && product.price >= 100 && product.price <= 300) ||
      (priceRange === "over-300" && product.price > 300);
    
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "rating": return b.rating - a.rating;
      default: return a.name.localeCompare(b.name);
    }
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Discover our comprehensive range of business solutions designed to accelerate your growth and maximize your potential.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-100">Under $100</SelectItem>
                <SelectItem value="100-300">$100 - $300</SelectItem>
                <SelectItem value="over-300">Over $300</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" data-animate className={`py-24 bg-white transition-all duration-1000 ${isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in relative" style={{ animationDelay: `${index * 0.1}s` }}>
                {product.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black z-10">
                    Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group">
                    <span className="text-gray-500 font-medium">{product.image}</span>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" style={{ transitionDelay: "0.1s" }}>
                          <ShoppingCart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.value === product.category)?.label}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Button size="sm" asChild className="hover:scale-110 transition-transform duration-300">
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section id="related" data-animate className={`py-24 bg-gray-50 transition-all duration-1000 ${isVisible.related ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Bundles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our specially curated product bundles designed to provide comprehensive solutions for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product, index) => (
              <Card key={product.id} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-primary font-medium">{product.image}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary">
                      Bundle
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Button size="sm" asChild className="hover:scale-110 transition-transform duration-300">
                      <Link to={`/product/${product.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Our product specialists are here to help you find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold" asChild>
              <Link to="/contact">Get Expert Advice</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300" asChild>
              <Link to="/booking">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
