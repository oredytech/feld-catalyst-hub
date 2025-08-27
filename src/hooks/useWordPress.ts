import { useQuery } from '@tanstack/react-query';
import { WordPressPost, WordPressCategory, WordPressTag } from '@/types/wordpress';

const WP_API_BASE = 'http://feld-rdc.org/wp-json/wp/v2';

export const useWordPressPosts = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ['wordpress-posts', page, perPage],
    queryFn: async (): Promise<WordPressPost[]> => {
      const response = await fetch(
        `${WP_API_BASE}/posts?page=${page}&per_page=${perPage}&_embed=true`
      );
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des articles');
      }
      
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useWordPressPost = (slug: string) => {
  return useQuery({
    queryKey: ['wordpress-post', slug],
    queryFn: async (): Promise<WordPressPost> => {
      const response = await fetch(
        `${WP_API_BASE}/posts?slug=${slug}&_embed=true`
      );
      
      if (!response.ok) {
        throw new Error('Article non trouvé');
      }
      
      const posts = await response.json();
      if (posts.length === 0) {
        throw new Error('Article non trouvé');
      }
      
      return posts[0];
    },
    enabled: !!slug,
  });
};

export const useWordPressCategories = () => {
  return useQuery({
    queryKey: ['wordpress-categories'],
    queryFn: async (): Promise<WordPressCategory[]> => {
      const response = await fetch(`${WP_API_BASE}/categories`);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des catégories');
      }
      
      return response.json();
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useWordPressTags = () => {
  return useQuery({
    queryKey: ['wordpress-tags'],
    queryFn: async (): Promise<WordPressTag[]> => {
      const response = await fetch(`${WP_API_BASE}/tags`);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des tags');
      }
      
      return response.json();
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};