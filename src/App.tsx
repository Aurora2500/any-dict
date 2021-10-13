import { AddEntryPrompt } from 'AddEntryPrompt';
import { EntryCard } from 'Entry';
import React, {useReducer, useState} from 'react';
import { entryReducer } from 'utility/entryReducer';
import './App.scss';

import fuzzy from "fuzzy";


function App() {
	const [filtertext, setFilter] = useState("");
	const [entries, entryDispatch] = useReducer(entryReducer, []);
	const [showAdd, toggleAdd] = useState(false);

	const filteredEntries = fuzzy.filter(filtertext, entries, {
		extract: e => e.word,
	})

	return (
		<div className="App">
			<header>
				<button onClick={() => {
					const blob = new Blob([JSON.stringify(entries)]);
					const downloadURL = URL.createObjectURL(blob);
					const a = document.createElement("a");
					a.href=downloadURL;
					a.download="dictionary.json"
					a.click();
					URL.revokeObjectURL(downloadURL);
				}}>download</button>
				<input onChange={e => {
					const file = e.target.files![0];
					const reader = new FileReader();

					reader.onload = (e => {
						const content = e.target?.result ?? "";
						const scontent =  typeof content == "string" ? content : "";
						const parsed = JSON.parse(scontent);
						entryDispatch({type: "replace", payload: parsed})
					});
					reader.readAsText(file);
				}} type="file"/>
				<input value={filtertext} onChange={e => setFilter(e.target.value)}/> <button onClick={() => toggleAdd(b => !b)}>Add</button>
				{showAdd && <AddEntryPrompt entryDispatch={entryDispatch}/>}
			</header>
			<div className="entry-list">
				{filteredEntries.map(e => (
					<EntryCard key={e.original.word} {...e.original}/>
				))}
			</div>
		</div>
	);
}

export default App;
