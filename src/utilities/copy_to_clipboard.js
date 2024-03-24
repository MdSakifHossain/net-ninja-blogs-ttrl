// copy_to_clipboard.js

export const copy_to_clipboard = async content => {
	try {
		await navigator.clipboard.writeText(content);
	} catch (err) {
		console.error(err);
	}
};
