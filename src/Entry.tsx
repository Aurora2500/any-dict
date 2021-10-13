import React from "react";
import { Entry } from "types";

const EntryCard: React.VFC<Entry> = ({word,translation, body}) => {
	return (
	<article className="dictionary-entry">
		<h3>{word}</h3>
		{translation && <div>Translation: <b>{translation}</b></div>}
		{body}
	</article>
	)
}

export {EntryCard}