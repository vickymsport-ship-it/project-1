import products from '@/data/products.json';
import ProductClientPage from './client-page';

// Generate static paths for all products
export async function generateStaticParams() {
  return products.products.map((product) => ({
    id: product.id.toString(),
  }));
}

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  
  return <ProductClientPage params={resolvedParams} />;
}