interface ChipProps {
  label: string;
}

const Chip = ({ label }: ChipProps) => {
  return (
    <span className="rounded-full px-3 py-1 bg-gray-300 border border-gray-400 text-md font-semibold text-gray-700">
      {label}
    </span>
  )
}

export default Chip;