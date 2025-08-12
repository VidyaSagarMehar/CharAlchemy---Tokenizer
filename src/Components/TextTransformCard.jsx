import React from 'react';

const TextTransformCard = ({
	label,
	placeholder,
	value,
	onChange,
	outputLabel,
	output,
}) => {
	return (
		<div className="bg-primary p-6 rounded-2xl shadow-lg border border-secondary/20 space-y-4">
			<label className="block text-lg font-medium text-white">{label}</label>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className="w-full p-3 rounded-lg bg-black border border-secondary text-white focus:outline-none focus:ring-2 focus:ring-secondary"
			/>
			{output && (
				<div className="bg-black border border-secondary/50 p-4 rounded-lg">
					<p className="text-sm font-semibold text-gray-300 mb-1">
						{outputLabel}
					</p>
					<p className="text-secondary break-words">{output}</p>
				</div>
			)}
		</div>
	);
};

export default TextTransformCard;
