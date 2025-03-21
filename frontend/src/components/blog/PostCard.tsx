import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    featuredImage?: string;
    publishedAt: string;
    author: {
      name: string;
      avatarUrl?: string;
    };
    categories?: string[];
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.featuredImage && (
        <Link href={`/posts/${post.slug}`} className="block relative h-48 overflow-hidden">
          <Image 
            src={post.featuredImage} 
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority={false}
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </Link>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <time dateTime={post.publishedAt}>{formattedDate}</time>
          {post.categories && post.categories.length > 0 && (
            <>
              <span className="mx-2">•</span>
              <span>
                {post.categories.map((category, index) => (
                  <React.Fragment key={category}>
                    <Link 
                      href={`/categories/${category.toLowerCase()}`}
                      className="text-blue-600 hover:underline"
                    >
                      {category}
                    </Link>
                    {index < post.categories.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </span>
            </>
          )}
        </div>
        
        <Link href={`/posts/${post.slug}`} className="block">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
        </Link>
        
        {post.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}
        
        <div className="flex items-center mt-4">
          {post.author.avatarUrl ? (
            <Image 
              src={post.author.avatarUrl} 
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
          ) : (
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">
                {post.author.name.charAt(0)}
              </span>
            </div>
          )}
          <span className="text-sm font-medium text-gray-900">
            {post.author.name}
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostCard; 