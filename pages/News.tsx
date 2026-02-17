import React, { useState } from 'react';
import { Search, Tag } from 'lucide-react';
import { MOCK_NEWS } from '../constants';

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  // Explicitly typing post to ensure inference works even if import has issues temporarily
  const allTags = Array.from(new Set(MOCK_NEWS.flatMap((post: { tags: string[] }) => post.tags)));

  const filteredNews = MOCK_NEWS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-slate-800 mb-2">Aktualności</h1>
          <p className="text-gray-500">Najnowsze informacje z życia klubu.</p>
        </div>
        
        {/* Search */}
        <div className="relative w-full md:w-64">
          <input 
            type="text" 
            placeholder="Szukaj..." 
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button 
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedTag === null ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Wszystkie
        </button>
        {allTags.map((tag) => (
          <button 
            key={tag as string}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag as string)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedTag === tag ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {tag as string}
          </button>
        ))}
      </div>

      {/* News List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredNews.length > 0 ? (
          filteredNews.map(post => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
              <div className="h-48 bg-gray-200 relative">
                 {/* Placeholder Image */}
                 <img 
                    src={`https://picsum.photos/seed/${post.id}/600/400`} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold rounded">
                    {post.date}
                  </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex gap-2 mb-3">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded-md flex items-center gap-1">
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 leading-tight">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                
                {/* Simple Expand Logic would go here or link to detail page */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <button 
                        onClick={() => alert(`Tutaj otworzyłby się pełny widok posta:\n\n${post.content}`)}
                        className="text-primary font-bold text-sm hover:underline"
                    >
                        Czytaj więcej
                    </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            Brak wyników wyszukiwania.
          </div>
        )}
      </div>
    </div>
  );
};

export default News;