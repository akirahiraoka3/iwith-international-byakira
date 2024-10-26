import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const Countries = () => {
  const cities = [
    { name: 'シドニー', description: 'オーストラリア最大の都市。美しいハーバーブリッジとオペラハウスが有名。' },
    { name: 'メルボルン', description: '文化と芸術の中心地。カフェ文化が盛んで、多様性に富む街。' },
    { name: 'パース', description: '西オーストラリアの州都。美しいビーチと自然が魅力。' },
    { name: 'ブリスベン', description: 'クイーンズランド州の州都。温暖な気候と近代的な都市景観が特徴。' },
    { name: 'ゴールドコースト', description: '美しいビーチと高層ビル群が並ぶリゾート地。サーフィンの聖地。' },
    { name: 'ケアンズ', description: 'グレートバリアリーフへの玄関口。熱帯雨林も近くにある。' },
    { name: 'アデレード', description: '南オーストラリア州の州都。優れたワイン産地に囲まれている。' },
    { name: 'キャンベラ', description: 'オーストラリアの首都。計画的に作られた近代的な都市。' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">オーストラリアの都市</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{city.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{city.description}</p>
                <div className="h-48 relative">
                  <img
                    src={`/images/${city.name.toLowerCase()}.jpg`}
                    alt={city.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Countries;