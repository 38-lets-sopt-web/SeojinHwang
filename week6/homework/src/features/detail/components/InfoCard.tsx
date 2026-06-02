interface InfoCardProps {
  label: string;
  value: string;
}

const InfoCard = ({ label, value }: InfoCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <p className="mb-2 text-lg font-semibold text-gray-500">{label}</p>
      <strong className="text-2xl font-bold text-gray-900">{value}</strong>
    </div>
  )
}

export default InfoCard;