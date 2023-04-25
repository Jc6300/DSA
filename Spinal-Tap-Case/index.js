function spinalCase(str) {
	// Replace spaces and underscores with dashes
	str = str.replace(/\s+|_+/g, "-");
	// Convert camelCase to spinal-case
	str = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
	return str;
}
