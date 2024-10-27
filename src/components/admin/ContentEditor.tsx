import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Image, Video, Link as LinkIcon, Eye, RotateCcw } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Block {
  id: string;
  type: 'text' | 'image' | 'video';
  content: string;
}

interface ContentEditorProps {
  initialContent?: Block[];
  onSave: (blocks: Block[]) => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ initialContent = [], onSave }) => {
  const { language } = useLanguage();
  const [blocks, setBlocks] = useState<Block[]>(initialContent);
  const [previewMode, setPreviewMode] = useState(false);

  const addBlock = (type: Block['type']) => {
    const newBlock: Block = {
      id: crypto.randomUUID(),
      type,
      content: ''
    };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id: string, content: string) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, content } : block
    ));
  };

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(block => block.id !== id));
  };

  const moveBlock = (fromIndex: number, toIndex: number) => {
    const newBlocks = [...blocks];
    const [movedBlock] = newBlocks.splice(fromIndex, 1);
    newBlocks.splice(toIndex, 0, movedBlock);
    setBlocks(newBlocks);
  };

  const handleSave = () => {
    onSave(blocks);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {language === 'uk' ? 'Редактор контенту' : 'Редактор контента'}
        </h2>
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setPreviewMode(!previewMode)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Eye className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Save className="w-4 h-4 mr-2" />
            {language === 'uk' ? 'Зберегти' : 'Сохранить'}
          </motion.button>
        </div>
      </div>

      <div className="space-y-4">
        {blocks.map((block, index) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-lg p-4"
            draggable
            onDragStart={(e) => e.dataTransfer.setData('text/plain', index.toString())}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
              moveBlock(fromIndex, index);
            }}
          >
            {block.type === 'text' ? (
              <textarea
                value={block.content}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                className="w-full min-h-[100px] p-2 border rounded"
                placeholder={language === 'uk' ? 'Введіть текст...' : 'Введите текст...'}
              />
            ) : block.type === 'image' ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={block.content}
                  onChange={(e) => updateBlock(block.id, e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder={language === 'uk' ? 'URL зображення...' : 'URL изображения...'}
                />
                {block.content && (
                  <img
                    src={block.content}
                    alt=""
                    className="max-w-full h-auto rounded"
                  />
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  value={block.content}
                  onChange={(e) => updateBlock(block.id, e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder={language === 'uk' ? 'URL відео...' : 'URL видео...'}
                />
                {block.content && (
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={block.content}
                      className="w-full h-full rounded"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}
            
            <div className="flex justify-end mt-2">
              <button
                onClick={() => removeBlock(block.id)}
                className="text-red-600 hover:text-red-700"
              >
                {language === 'uk' ? 'Видалити' : 'Удалить'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex space-x-2 mt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addBlock('text')}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <LinkIcon className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addBlock('image')}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Image className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addBlock('video')}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Video className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default ContentEditor;