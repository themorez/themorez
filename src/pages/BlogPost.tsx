import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import { fetchPost, stripHtml, formatDate, getFeaturedImage, getPostCategories } from "@/lib/wordpress";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = id ? parseInt(id, 10) : NaN;

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["wp-post", postId],
    queryFn: () => fetchPost(postId),
    enabled: !isNaN(postId),
  });

  if (isNaN(postId)) return <Navigate to="/blog" replace />;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 space-y-8">
          <Skeleton className="h-5 w-32 rounded-full" />
          <Skeleton className="h-[420px] w-full rounded-3xl" />
          <Skeleton className="h-10 w-3/4" />
          <div className="flex gap-3">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>
          <div className="space-y-4 pt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground mb-4">Post not found or failed to load.</p>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  const image = getFeaturedImage(post);
  const categories = getPostCategories(post);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        {/* Back Navigation */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to blog
        </a>

        {/* Hero Image */}
        {image && (
          <div className="relative rounded-3xl overflow-hidden mb-10 animate-scale-in">
            <img
              src={image}
              alt={stripHtml(post.title.rendered)}
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        )}

        {/* Article Header */}
        <div className="mb-10 animate-slide-up">
          {/* Meta row */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {categories.map((cat) => (
              <span
                key={cat.id}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-muted text-muted-foreground"
              >
                <Tag className="w-3 h-3" />
                {cat.name}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-border mb-10" />

        {/* Article Content */}
        <article
          className="prose prose-lg max-w-none animate-slide-up stagger-2
            prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-[1.85] prose-p:mb-6
            prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-2xl prose-img:my-8
            prose-blockquote:border-l-2 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground/80
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:leading-[1.8]
            prose-hr:border-border prose-hr:my-10"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Bottom navigation */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All articles
          </a>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
