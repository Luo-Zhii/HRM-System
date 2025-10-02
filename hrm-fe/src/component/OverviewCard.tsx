type OverviewCardProps = {
  title: string;
  value: number | string;
};

function OverviewCard({ title, value }: OverviewCardProps) {
  return (
    <div className="text-gray-800 bg-white shadow rounded-lg p-4">
      <h2 className="text-sm font-medium text-gray-500">{title}</h2>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

export default OverviewCard;
