import { LabeledInput, LabeledTextarea } from 'FormComponents';
import React, { useState } from 'react';
import {EntryAction} from "types";

interface Props {
	entryDispatch: (action: EntryAction) => void;
}

export const AddEntryPrompt: React.VFC<Props> = ({entryDispatch}) => {
	const [word, setWord] = useState("")
	const [translation, setTranslation] = useState("")
	const [body, setBody] = useState("")
	return(
		<form className="add-entry-form" onSubmit={e => {
			e.preventDefault()
			entryDispatch({
				type: "add",
				payload: {
					word, translation, body
				}
			})
			console.log("submitted")
		}}>
			<LabeledInput label="word" value={word} setValue={setWord}/>
			<LabeledInput label="translation" value={translation} setValue={setTranslation}/>
			<LabeledTextarea label="word" value={body} setValue={setBody}/>
			<button type="submit">submit</button>
		</form>
	);
}