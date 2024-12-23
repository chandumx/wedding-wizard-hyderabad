interface PageHeaderProps {
  title: string;
  isCharminarWeddingHalls?: boolean;
}

export const PageHeader = ({ title, isCharminarWeddingHalls }: PageHeaderProps) => {
  if (isCharminarWeddingHalls) {
    return (
      <h1 className="text-4xl font-display font-bold mb-6 text-center">
        Wedding Halls in Charminar
      </h1>
    );
  }

  return (
    <h1 className="text-4xl font-display font-bold mb-6 text-center">
      {title}
    </h1>
  );
};