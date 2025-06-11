import { notFound } from 'next/navigation';
import { getPostBySlug, getBlogPosts } from '@/lib/blogData';
import BlogPostPage from '@/components/pages/blogs/BlogPostPage';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${post.title} | AutoGen Labs Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://autogenlabs.com/blogs/${post.slug}`,
      siteName: 'AutoGen Labs',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: `@${post.author.name.toLowerCase().replace(' ', '')}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://autogenlabs.com/blogs/${post.slug}`,
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage params={params} />;
}