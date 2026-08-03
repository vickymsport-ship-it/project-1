
import Image from "next/image";
import Link from "next/link";

import notes from "@/data/notes.json";


interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  variations?: number;
  showCardDescription?: boolean;
}

interface FragranceCardProps {
  collectionName: string;
}




export default async function FragranceCard({ collectionName }: FragranceCardProps) {
  const productsCollection = notes.notes.filter((p) => p.collection === collectionName);


  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {productsCollection.map((product) => (
        <div
          key={product.id}
          className="w-80 pb-6 bg-white rounded-2xl inline-flex flex-col justify-start items-center gap-3 overflow-hidden"
        >
          <div className="w-80 h-80 relative bg-white overflow-hidden">
            <Image
              src={product.image.startsWith("/") ? product.image : `/${product.image}`}
              alt={product.name}
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-72 h-11 text-center justify-center text-zinc-800 text-3xl font-medium font-['Rubik'] leading-6">
            {product.name}
          </div>
          <div className="w-72 h-20 text-center justify-start text-black text-xl font-normal font-['Rubik'] leading-6">
            {product.description}
          </div>
        </div>
      ))}
    </div>
  );
}
