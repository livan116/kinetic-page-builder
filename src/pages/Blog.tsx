
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Blog Post Title 1",
      excerpt: "Placeholder excerpt for blog post 1. Replace with actual blog content summary and key points.",
      date: "2024-01-15",
      author: "John Author",
      category: "Category 1",
      readTime: "5 min read"
    },
    {
      title: "Blog Post Title 2", 
      excerpt: "Placeholder excerpt for blog post 2. Include engaging content that provides value to your audience.",
      date: "2024-01-10",
      author: "Jane Writer",
      category: "Category 2",
      readTime: "3 min read"
    },
    {
      title: "Blog Post Title 3",
      excerpt: "Placeholder excerpt for blog post 3. Focus on topics relevant to your industry and audience interests.",
      date: "2024-01-05",
      author: "Mike Blogger",
      category: "Category 1", 
      readTime: "7 min read"
    },
    {
      title: "Blog Post Title 4",
      excerpt: "Placeholder excerpt for blog post 4. Include actionable insights and helpful information for readers.",
      date: "2024-01-01",
      author: "Sarah Content",
      category: "Category 3",
      readTime: "4 min read"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and news from our industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.title} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Featured Image Placeholder</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300">
              View All Posts
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gray-50 rounded-lg p-12 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles and updates directly in your inbox.
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

export default Blog;
