import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState(null);
