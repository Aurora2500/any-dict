import {Entry, EntryAction} from "types";

const entryReducer = (state: Entry[], action: EntryAction) => {
	switch (action.type) {
		case "add":
			return [...state, action.payload];
		case "replace":
			return action.payload;
	}
}

export {entryReducer}