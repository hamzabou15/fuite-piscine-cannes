// components/services/ServiceContentSection.tsx
export default function ServiceContentSection({ content }: { content: string }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </div>
    </section>
  );
}