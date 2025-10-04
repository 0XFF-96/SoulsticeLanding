import { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': {
        'is-popup'?: string;
        'chatbot-id'?: string;
      };
    }
  }
}

export function ZapierChatbot() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 检查是否已经加载过脚本
    const existingScript = document.querySelector('script[src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"]');
    
    if (existingScript) {
      setIsLoaded(true);
      return;
    }

    // 立即加载 Zapier Interfaces 脚本
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.async = true;
    
    // 监听脚本加载完成
    script.onload = () => {
      // 等待 Web Components 注册完成
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    };

    script.onerror = () => {
      console.warn('Failed to load Zapier chatbot script');
    };

    document.head.appendChild(script);

    // 清理函数
    return () => {
      // 可以选择性地移除脚本，但通常保持加载状态更好
    };
  }, []);

  // 如果还未加载，显示一个占位符或什么都不显示
  if (!isLoaded) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <zapier-interfaces-chatbot-embed 
        is-popup="true" 
        chatbot-id="cmgbrx1ei001qcwqmxwai7dcu"
      />
    </div>
  );
}
