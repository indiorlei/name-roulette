"use client";

import { useNames } from "@/hooks/useNames";
import { InputProps, NameItemProps } from "@/types/names";
import { useState } from "react";

const NameInput = ({ value, onChange, error, onSubmit }: InputProps) => (
  <form onSubmit={onSubmit} className="mb-6">
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Digite um nome"
          className={`flex-1 bg-gray-800/50 backdrop-blur-sm border ${
            error ? "border-red-500" : "border-gray-700/30"
          } rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500`}
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-400 text-gray-900 px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Adicionar
        </button>
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  </form>
);

const NameItem = ({ name, onRemove }: NameItemProps) => (
  <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-lg p-3 text-gray-200 hover:bg-gray-800/70 transition-colors duration-200 flex items-center justify-between">
    <span className="flex-1">{name}</span>
    <button
      onClick={onRemove}
      className="opacity-0 group-hover:opacity-100 text-red-400 transition-all duration-200 p-1.5 rounded-full cursor-pointer"
      aria-label={`Remover ${name}`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
);

const EmptyState = () => (
  <div className="text-gray-400 text-sm">Nenhum nome adicionado ainda</div>
);

export const ListNames = () => {
  const { names, addName, removeName, clearNames } = useNames();
  const [newName, setNewName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = newName.trim();

    if (!trimmedName) {
      setError("O nome não pode estar vazio");
      return;
    }

    if (
      names.some((name) => name.toLowerCase() === trimmedName.toLowerCase())
    ) {
      setError("Este nome já está na lista");
      return;
    }

    addName(trimmedName);
    setNewName("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
    setError(null);
  };

  return (
    <div className="w-full max-w-2xl">
      <NameInput
        value={newName}
        onChange={handleInputChange}
        error={error}
        onSubmit={handleSubmit}
      />

      {names.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-200">
              Nomes ({names.length})
            </h2>
            <button
              onClick={clearNames}
              className="text-red-400 hover:text-red-300 text-sm transition-colors duration-200"
            >
              Limpar todos
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {names.map((name, index) => (
              <NameItem
                key={index}
                name={name}
                onRemove={() => removeName(name)}
              />
            ))}
          </div>
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};
