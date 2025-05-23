"use client";

import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";

type Comment = { id: number; author: string; text: string };

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: "Alice", text: "Vídeo incrível!" },
    { id: 2, author: "Bob", text: "Ótima explicação." },
  ]);
  const [newComment, setNewComment] = useState("");

  const handlePost = () => {
    if (!newComment.trim()) return;
    setComments((prev) => [
      ...prev,
      { id: prev.length + 1, author: "Você", text: newComment.trim() },
    ]);
    setNewComment("");
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">Comentários</h3>
      <textarea
        className="w-full p-2 border rounded"
        rows={3}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Adicione um comentário..."
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handlePost}
      >
        Publicar
      </button>

      <Accordion.Root type="multiple" className="mt-4 space-y-2">
        {comments.map((c) => (
          <Accordion.Item
            key={c.id}
            value={String(c.id)}
            className="border rounded"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full text-left p-2">
                <span className="font-medium">{c.author}</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="p-2 border-t">
              {c.text}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
