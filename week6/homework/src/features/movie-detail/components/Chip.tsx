interface ChipProps {
  label: string;
}

const Chip = ({ label }: ChipProps) => {
  return (
    <span className="rounded-full px-3 py-1 bg-gray-100 border border-gray-200 text-lg text-gray-700">
      {label}
    </span>
  )
}

export default Chip;