import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function DebounceSearchDemo() {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div>
      <h2>Debounce Search Demo</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Type to search..."
      />

      <p>Current Input: {searchTerm}</p>
      <p>Debounced Value: {debouncedSearchTerm}</p>
    </div>
  );
}