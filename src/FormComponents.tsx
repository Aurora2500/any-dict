import React from "react";

interface LabeledInputPrompt {
	label: string;
	value: string;
	setValue: (newValue: string) => void;
}

export const LabeledInput: React.VFC<LabeledInputPrompt> = ({
	label,
	value,
	setValue
}) => {
	return (
		<div className="labeled-input">
			<label className="labeled-input-label">{label}</label>
			<input className="labeled-input-input" value={value} onChange={e => setValue(e.target.value)}/>
		</div>
	)
}

export const LabeledTextarea: React.VFC<LabeledInputPrompt> = ({
	label,
	value,
	setValue
}) => {
	return (
		<div className="labeled-input">
			<label className="labeled-input-label">{label}</label>
			<textarea className="labeled-input-input" value={value} onChange={e => setValue(e.target.value)}/>
		</div>
	)
}