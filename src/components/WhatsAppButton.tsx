import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [showChat, setShowChat] = useState(true);
  const phoneNumber = '905427743499';

  const handleChatClick = () => {
    setShowChat(false);
  };

  const sendMessage = (text: string) => {
    const message = text;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {showChat && (
        <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 w-80 animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Çözüm Merkezi Kozan</div>
                <div className="text-xs text-green-600">Çevrimiçi</div>
              </div>
            </div>
            <button
              onClick={handleChatClick}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <p className="text-gray-700 text-sm">
              Merhaba size nasıl yardımcı olabilirim?
            </p>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => sendMessage('Merhaba, beyaz eşya servisi hakkında bilgi almak istiyorum.')}
              className="w-full text-left bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition-all"
            >
              Beyaz eşya servisi
            </button>
            <button
              onClick={() => sendMessage('Merhaba, klima servisi hakkında bilgi almak istiyorum.')}
              className="w-full text-left bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition-all"
            >
              Klima servisi
            </button>
            <button
              onClick={() => sendMessage('Acil servis talep ediyorum.')}
              className="w-full text-left bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition-all"
            >
              Acil servis
            </button>
          </div>

          <button
            onClick={() => sendMessage('Merhaba')}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp'ta Açın
          </button>
        </div>
      )}

      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="WhatsApp ile iletişime geç"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}
    </>
  );
}
