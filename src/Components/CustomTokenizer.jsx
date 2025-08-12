import React, { useState } from 'react';
import TextTransformCard from './TextTransformCard';

export default function CustomTokenizer() {
	const [inputText, setInputText] = useState('');
	const [tokens, setTokens] = useState([]);
	const [asciiInput, setAsciiInput] = useState('');
	const [decodedText, setDecodedText] = useState('');

	// Tokenize function
	const handleTokenize = (text) => {
		const tokenArray = text.split('').map((char) => char.charCodeAt(0)); //gets the ASCII value of the char
		setTokens(tokenArray);
	};

	// Detokenize function
	const handleDetokenize = (asciiStr) => {
		const decoded = asciiStr
			.split(' ')
			.map((num) => String.fromCharCode(parseInt(num, 10))) // converts num to char from decimal base
			.join(''); // joins the array of char back into a single string
		setDecodedText(decoded);
	};

	return (
		<div className=" z-10 min-h-screen bg-black text-white p-8 flex flex-col items-center">
			<div className="max-w-3xl w-full space-y-10">
				<h1 className="text-3xl sm:text-5xl font-bold text-center underline decoration-secondary">
					CharAlchemy
				</h1>
				<p className="text-xl font-semibold text-center">
					A <span className="text-secondary">tokenizer</span> and{' '}
					<span className="text-secondary">detokenizer</span> tool that
					transforms any mix of letters, numbers, and special character
				</p>

				{/* Tokenization */}
				<TextTransformCard
					label="Text → Tokens"
					placeholder="Enter text..."
					value={inputText}
					onChange={(val) => {
						setInputText(val);
						handleTokenize(val);
					}}
					outputLabel="Tokens"
					output={tokens.length > 0 ? tokens.join(' ') : ''}
				/>

				{/* Detokenization */}
				<TextTransformCard
					label="Tokens → Text"
					placeholder="Example: 72 101 108 108 111"
					value={asciiInput}
					onChange={(val) => {
						setAsciiInput(val);
						handleDetokenize(val);
					}}
					outputLabel="Decoded Text"
					output={decodedText}
				/>

				{/* Mapping Table */}
				{tokens.length > 0 && (
					<div className="bg-primary p-6 rounded-2xl shadow-lg border border-secondary/20 z-20">
						<p className="text-lg font-semibold text-secondary mb-3">
							Character ↔ ASCII Mapping
						</p>
						<div className="overflow-x-auto">
							<table className="table-auto border-collapse border border-secondary/20 w-full text-center">
								<thead className="bg-secondary text-black">
									<tr>
										<th className="border border-secondary/20 p-2">
											Character
										</th>
										<th className="border border-secondary/20 p-2">ASCII</th>
									</tr>
								</thead>
								<tbody>
									{inputText.split('').map((char, index) => (
										<tr key={index} className="hover:bg-secondary/10">
											<td className="border border-secondary/20 p-2">{char}</td>
											<td className="border border-secondary/20 p-2">
												{tokens[index]}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
