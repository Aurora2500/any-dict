
export interface Entry {
	word: string;
	translation: string;
	body: string;
}

export type EntryAction =
	{
		type: "add";
		payload: Entry;
	} | {
		type: "replace";
		payload: Entry[];
	}