import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    id: '1',
    title: '10 найкращих місць для відпочинку в Карпатах',
    excerpt: 'Відкрийте для себе найживописніші куточки українських Карпат, які варто відвідати кожному...',
    author: 'Марія Ковальчук',
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072',
    category: 'Природа'
  },
  {
    id: '2',
    title: 'Гастрономічний тур Львовом',
    excerpt: 'Путівник найкращими кав\'ярнями та ресторанами культурної столиці України...',
    author: 'Петро Василенко',
    date: '2024-03-12',
    imageUrl: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=2070',
    category: 'Гастрономія'
  },
  {
    id: '3',
    title: 'Пляжний відпочинок в Україні',
    excerpt: 'Огляд найкращих пляжів українського узбережжя для літнього відпочинку...',
    author: 'Олена Шевченко',
    date: '2024-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=2070',
    category: 'Пляжі'
  }
];

const BlogPage = () => {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto pb-16">
      <h1 className="text-3xl font-bold mb-8">Блог про подорожі</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString('uk-UA')}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;