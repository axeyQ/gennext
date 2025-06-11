import BlogPage from '@/components/pages/blogs/BlogPage';

export const metadata = {
  title: 'Blog - AutoGen Labs',
  description: 'Insights, tutorials, and updates from the world of intelligent infrastructure and AI-powered development.',
  openGraph: {
    title: 'AutoGen Labs Blog',
    description: 'Expert insights on AI-powered infrastructure and development',
    type: 'website',
  },
};

export default function Blog() {
  return <BlogPage />;
}