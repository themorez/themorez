import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import { fetchPosts, fetchCategories, stripHtml, formatDate, getFeaturedImage, getPostCategories } from "@/lib/wordpress";
import { Search, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>();
  const [page, setPage] = useState(1);

  const { data: categoriesData } = useQuery({
    queryKey: ["wp-categories"],
    queryFn: fetchCategories
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["wp-posts", search, selectedCategory, page],
    queryFn: () => fetchPosts({ search: search || undefined, categories: selectedCategory, page, per_page: 9 })
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  const handleCategoryClick = (catId?: number) => {
    setSelectedCategory(catId);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        {/* Page Header */}
        <div className="text-center mb-14 animate-slide-up">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-muted text-muted-foreground mb-6">
            Articles & Thoughts
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight">Blog</h1>
          <p className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            Exploring ideas at the intersection of literature, culture, and thought.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12 space-y-5 animate-slide-up stagger-1">
          <form onSubmit={handleSearch} className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all placeholder:text-muted-foreground/60"
            />
          </form>

          {categoriesData && categoriesData.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => handleCategoryClick(undefined)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  !selectedCategory
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted"
                }`}
              >
                All
              </button>
              {categoriesData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 capitalize ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-3xl overflow-hidden">
                <Skeleton className="aspect-[4/3] w-full rounded-3xl" />
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-24">
            <p className="text-muted-foreground">Failed to load posts. Please try again later.</p>
          </div>
        ) : data && data.posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-muted-foreground">No posts found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data?.posts.map((post, index) => {
                const image = getFeaturedImage(post);
                const cats = getPostCategories(post);
                return (
                  <a
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className={`group relative block rounded-3xl overflow-hidden card-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-3xl">
                      {image ? (
                        <img
                          src={image}
                          alt={stripHtml(post.title.rendered)}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground text-xs">No image</span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          {cats[0] && (
                            <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/10">
                              {cats[0].name}
                            </span>
                          )}
                          <span className="px-3 py-1 rounded-full text-[10px] font-medium text-white/70 bg-white/10 backdrop-blur-md border border-white/10">
                            {formatDate(post.date)}
                          </span>
                        </div>

                        <div>
                          <h3
                            className="text-white text-lg md:text-xl font-bold leading-snug tracking-tight line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                          <p className="text-white/50 text-xs mt-2 line-clamp-2 leading-relaxed">
                            {stripHtml(post.excerpt.rendered)}
                          </p>
                        </div>
                      </div>

                      <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Pagination */}
            {data && data.totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 mt-14">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: data.totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-9 h-9 rounded-full text-xs font-medium transition-all duration-300 ${
                      page === p
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage(Math.min(data.totalPages, page + 1))}
                  disabled={page === data.totalPages}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Blog;
