function getId(text: string): string {
  const parts = text.split("/");
  const id = parts[parts.length - 1];
  return id.toString();
}

function removeDashAndAfter(text: string) {
  const index = text.indexOf("-");
  if (index !== -1) {
    return text.slice(0, index);
  }
  return text;
}

function formatAddress(address: string): string {
  const parts = address.split(", ");
  const formattedAddress = parts
    .filter((part) => !part.includes("+"))
    .join(", ");
  return formattedAddress;
}

export { getId, removeDashAndAfter, formatAddress };
